<template>
  <Container title="怎么进行你的代码优化 & 编译器怎么优化你的代码">
    <BlogH1>概述</BlogH1>

    <BlogParagraph>在编程世界中，处处都是代码优化。</BlogParagraph>

    <BlogParagraph>以下所述的众多优化中，有些是编译器会帮我们做的优化，有些是我们在程序编写中就可以进行的代码优化。</BlogParagraph>

    <BlogH1>常量折叠</BlogH1>

    <BlogParagraph>在代码中可能会出现一些字面量，例如：</BlogParagraph>

    <BlogCodeBlock>int seconds_of_two_hours = 2 * 60 * 60; // 两个小时是多少秒？</BlogCodeBlock>

    <BlogParagraph>编译器可能会对这段代码进行优化：在编译器进行语法分析时，直接计算出 2 * 60 * 60 这个“常量表达式”的结果，并使用该结果直接进行替代，以减少运行时的计算开销：</BlogParagraph>

    <BlogCodeBlock>int seconds_of_two_hours = 7200; // &lt;-- 2 * 60 * 60</BlogCodeBlock>

    <BlogParagraph>在代码中的这些字面量看似是“需要避免的不良编程习惯”，但是在特定场合下，它们极大提高了代码的可读性（例如上述被编译器优化前的代码 2 * 60 * 60 <BlogBold>很直观地阐述了该值在真实世界中的物理含义</BlogBold>，如果直接使用 7200 可能会让代码阅读者摸不清头脑。因此，如果编译器能做这个优化，程序员既可以写出易读的程序，又不必担心性能受影响。</BlogParagraph>

    <BlogH1>代码内联</BlogH1>

    <BlogParagraph>可以直接将「函数调用」替换为「函数体」</BlogParagraph>

    <BlogParagraph>主要目的：一、<BlogBold>去除方法调用的成本</BlogBold>（如查找方法版本、建立栈帧等）；二、<BlogBold>为其他优化建立良好的基础</BlogBold>（函数内联膨胀之后可以便于更大范围上进行后续的优化手段）。</BlogParagraph>

    <BlogParagraph>但如果对一个方法体行数较多的方法进行内联，可能会导致代码的膨胀（n 个单行的函数调用可能会变成 n * k 行的代码，其中假设函数体有 k 行代码）。因此，<BlogBold>当需要进行函数内联时，尽量选择方法体较小的、函数调用频繁的函数进行内联</BlogBold>。</BlogParagraph>

    <BlogCodeBlock>
      // 优化前<br>
      <br>
      // inline 关键字会“建议“而非“强制“编译器进行内联<br>
      inline int add_one(int num) { return num + 1; } <br>
      <br>
      void func() {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;int num = 0;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;num = add_one(num);<br>
      &nbsp;&nbsp;&nbsp;&nbsp;num = add_one(num);<br>
      &nbsp;&nbsp;&nbsp;&nbsp;num = add_one(num);<br>
      &nbsp;&nbsp;&nbsp;&nbsp;std::cout &lt;&lt; num &lt;&lt; std::endl;<br>
      }<br>
      <br>
      // 优化后<br>
      <br>
      void func() {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;int num = 0;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;num = num + 1;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;num = num + 1;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;num = num + 1;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;std::cout &lt;&lt; num &lt;&lt; std::endl;<br>
      }
    </BlogCodeBlock>

    <BlogParagraph>值得一提的是，Java 中默认的实例方法是虚方法，而对于一个虚方法，编译器静态地去做内联的时候很难确定应该使用哪个方法版本。</BlogParagraph>

    <BlogParagraph>为了解决虚方法的内联问题，JVM 引入了<BlogBold>类型继承关系分析（Class Hierarchy Analysis，CHA）</BlogBold>技术，用于“确定在目前已加载的类中，某个接口是否有多于一种的实现、某个类是否存在子类、某个子类是否覆盖了父类的某个虚方法等信息”。</BlogParagraph>

    <BlogParagraph>于是，在 JVM 遇到虚方法进行内联时，可以向 CHA 查询此方法在当前程序状态下是否真的有多个目标版本可供选择：【情况一】如果查询到只有一个版本，那就可以假设“应用程序的全貌就是现在运行的这个样子“来进行内联，即”<BlogBold>守护内联</BlogBold>“（Guarded Inlining）。</BlogParagraph>

    <BlogParagraph>然而，由于 Java 程序是动态连接的，说不定在程序运行的某个时刻有新的类型会被 JVM 所加载，从而改变 CHA 结论，因此，可以说 Java 的这种内联属于“激进预测性优化“，必须预留好”当假设不成立时的退路（Slow Path）“。</BlogParagraph>

    <BlogParagraph>【情况二】假如，JVM 向 CHA 查询的结果是该方法确实有多个版本的目标可供选择，那 JIT 还将进行“最后一次努力”，使用“<BlogBold>内联缓存</BlogBold>（Inline Cache）”缩减方法调用的开销。</BlogParagraph>

    <BlogH1>分支预测</BlogH1>

    <BlogParagraph>if 等分支指令在实际程序运行时所消耗的时长比其他指令更高，且其大大增加了 CPU 对代码进行并行化的难度。</BlogParagraph>

    <BlogParagraph>而分支预测算法能在一定程度上帮助 CPU 去减少特定场景下的分支判断，从而提高程序的效率。</BlogParagraph>

    <BlogParagraph>在 C++ 20 中，可以使用 [[likely]] 与 [[unlikely]] 进行辅助。</BlogParagraph>

    <BlogH1>减少不必要的内存引用</BlogH1>

    <BlogParagraph>相比于位运算、数值运算等操作，内存引用操作（解引用等）具有较长的执行时间（虽然宏观来看并不长，但由于其触发频率之高，是值得考虑优化的点）。</BlogParagraph>

    <BlogCodeBlock>
      // 优化前<br>
      <br>
      void func(int *num) {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;*num += get_num_0(); // 一次内存引用<br>
      &nbsp;&nbsp;&nbsp;&nbsp;*num += get_num_1(); // 两次内存引用<br>
      &nbsp;&nbsp;&nbsp;&nbsp;*num += get_num_2(); // 三次内存引用<br>
      &nbsp;&nbsp;&nbsp;&nbsp;*num += get_num_3(); // 四次内存引用<br>
      }<br>
    </BlogCodeBlock>

    <BlogParagraph>可以通过「创建临时变量」的操作，将上方四次内存引用减少到一次：</BlogParagraph>

    <BlogCodeBlock>
      // 优化后<br>
      <br>
      void func(int *num) {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;int temp = 0;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;temp += get_num_0();<br>
      &nbsp;&nbsp;&nbsp;&nbsp;temp += get_num_1();<br>
      &nbsp;&nbsp;&nbsp;&nbsp;temp += get_num_2();<br>
      &nbsp;&nbsp;&nbsp;&nbsp;temp += get_num_3();<br>
      &nbsp;&nbsp;&nbsp;&nbsp;*num = temp;         // &lt;-- 唯一一次内存引用<br>
      }
    </BlogCodeBlock>

    <BlogH1>使用位运算</BlogH1>

    <BlogParagraph>“位运算“在绝大多数编程语言中都是效率最高的运算操作，我们能发现有许多算法库都是运用了大量的位运算技巧来替代可读性可能更高的加减乘除等运算。</BlogParagraph>

    <BlogH1>复写传播</BlogH1>

    <BlogParagraph>在一段代码中可能会没有必要使用一个额外的变量，例如上方代码中的 z，因此可以使用 y 直接代替 z：</BlogParagraph>

    <BlogCodeBlock>
      // 优化前<br>
      <br>
      void func() {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;y = b.value;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;/* do something that do not change the value of v */<br>
      &nbsp;&nbsp;&nbsp;&nbsp;z = y;        // &lt;-- 没有必要使用「变量 z」<br>
      &nbsp;&nbsp;&nbsp;&nbsp;sum = y + z;<br>
      }<br>
      <br>
      // 优化后<br>
      <br>
      void func() {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;y = b.value;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;/* do something that do not change the value of v */<br>
      &nbsp;&nbsp;&nbsp;&nbsp;y = y;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;sum = y + y;<br>
      }
    </BlogCodeBlock>

    <BlogH1>无用代码删除</BlogH1>

    <BlogParagraph>无用代码（Dead Code）可能是“永远不会被执行的代码”，也可能是“完全没有意义的代码”，比如上方代码中的 y = y，完全可以被消除掉：</BlogParagraph>

    <BlogCodeBlock>
      void func() {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;y = b.value;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;/* do something that do not change the value of v */<br>
      &nbsp;&nbsp;&nbsp;&nbsp;sum = y + y;<br>
      }
    </BlogCodeBlock>

    <BlogH1>逃逸分析</BlogH1>

    <BlogParagraph>逃逸分析（Escape Analysis）是 JVM 中比较前沿的优化技术，其与 CHA 一样，并不是直接优化代码的手段，而是<BlogBold>为其他优化措施提供依据的分析技术</BlogBold>。</BlogParagraph>

    <BlogParagraph>逃逸分析会<BlogBold>分析对象动态作用域</BlogBold>，当一个对象在方法里被定义后，它可能被外部方法所引用，例如作为调用参数传递到其他方法中，这叫<BlogBold>方法逃逸</BlogBold>；其可能被外部线程所访问到，这叫<BlogBold>线程逃逸</BlogBold>；从“不逃逸”“方法逃逸”到“线程逃逸”，成为对象由低到高的不同逃逸程度。</BlogParagraph>

    <BlogParagraph>如果能证明一个对象不会逃逸到方法或线程之外，或者逃逸程度比较低，则可能为这个对象实例采取不同程度的优化。</BlogParagraph>

    <BlogParagraph>【优化方式一：栈上分配】<BlogBold>如果确定一个对象不会逃逸出线程之外，那么可以考虑让其在栈上分配</BlogBold>，对象所占用的内存可以随栈帧出栈而销毁。而且一般来说完全不会逃逸的局部对象和不会逃逸出线程的对象所占的比例很大，如果能使用栈上分配，那大量的对象就会随着方法的结束而自动销毁，进而极大降低 GC 子系统的压力。</BlogParagraph>

    <BlogParagraph>栈上分配（Stack Allocation）指的是在栈上为对象分配内存，而非使用 malloc/new 等指令在堆上请求空间进行内存分配</BlogParagraph>

    <BlogParagraph>【优化方式二：标量替换】<BlogBold>如果逃逸分析能够证明一个对象不会被方法外部访问，并且这个对象是可以被拆散的，那么程序真正执行的时候将可能不去创建这个对象，而改为直接创建它的若干个被这个方法使用的成员变量来代替</BlogBold>。</BlogParagraph>

    <BlogParagraph>标量替换（Scalar Replacement）指的是将一个“聚合量（Aggregate）”递归替换为若干个标量（原始数据类型，int、long 等数值类型及 reference 类型等）</BlogParagraph>

    <BlogParagraph>【优化方式三：同步消除】<BlogBold>如果逃逸分析能够确定一个变量不会逃逸出线程（即无法被其他线程访问），那么这个变量的读写肯定不会有竞争，对这个变量实施的同步措施也就可以安全地消除掉</BlogBold>。</BlogParagraph>

    <BlogH1>数组边界检查消除</BlogH1>

    <BlogParagraph>C/C++ 将数据元素的索引视作“裸指针操作”，这样直接的操作具有较高的性能，但是一旦发生数组越界，那将是一个未定义行为（undefined behavior），即 C/C++ 将“防止数组越界”的任务交给程序员。</BlogParagraph>

    <BlogParagraph>但在 Java 等语言中，当进行数组元素访问时，系统将会自动进行上下界的范围检查，否则就会抛出一个运行时异常 java.lang.ArrayIndexOutOfBoundsException。这对软件开发者较为友好 —— 因为有兜底的操作，但是<BlogBold>对于拥有大量数组访问的程序代码，每次访问操作都附带一些附加安全保证是较大的性能负担</BlogBold>。</BlogParagraph>

    <BlogParagraph>“数组边界检查“并非必要要进行的操作，只要在编译期根据数据流分析确定数组的长度及判断数组下标访问没有越界，那么在运行期就不需要进行额外的判断了。</BlogParagraph>

    <BlogParagraph>例如，数组访问发生在循环之中，且程序使用循环变量来进行数组的访问，那么，只要编译器通过数据流分析就可以判定循环变量的取值永远不会越界，就看消除掉数组的边界检查。</BlogParagraph>

  </Container>
</template>

<script setup lang="ts">
import BlogH1 from "../../components/blog/BlogH1.vue"
import BlogH2 from "../../components/blog/BlogH2.vue"
import BlogCodeBlock from "../../components/blog/BlogCodeBlock.vue"
import BlogParagraph from "../../components/blog/BlogParagraph.vue"
import Container from "../../components/Container.vue"
import BlogBold from "@/components/blog/BlogBold.vue";
</script>

<style scoped>

</style>