<template>
  <Container title="Tong Zhaoqi">
    <div class="text-base">
      <HomeParagraph>
        Hey, I am <span class="font-bold">Tong Zhaoqi</span>. I am currently studying in
        <HomeLink url="https://www.scu.edu.cn/">Sichuan University</HomeLink>
        and will enter
        <HomeLink url="https://www.nju.edu.cn/main.htm">Nanjing University</HomeLink>
        for further study.
      </HomeParagraph>

      <HomeParagraph>
        From 2019 to 2023, I studied in School of Software, Sichuan University, majoring in Software Engineering.
        I was the <span class="font-bold">7/215</span> in my grade.
        I have won
        <span class="font-bold">the national second prize of China Software Cup</span> &
        <span class="font-bold">the national third prize of WeChat Miniprogram Development Competition</span>.
        As the project leader, I have hosted the <span class="font-bold">Provincial College Students Innovation Training Program</span>
        and as the second author, I published the thesis
        <HomeLink url="https://pubmed.ncbi.nlm.nih.gov/34764986/">Developing an Embedding, Koopman, and Autoencoder
          technologies-based multi-omics time series predictive model (EKATP) for systems biology research
        </HomeLink>
        .
        I got the <span class="font-bold">Best Implementation</span> award in the topic “Cloud Computing” during the
        2022 Summer Workshop of National University of Singapore.
        I am also the leader of my basketball team and the vice-leader of Tencent Club of Sichuan University.
      </HomeParagraph>

      <div class="flex justify-center">
        <div class="w-[50px] bg-gray-300 h-[1px] my-8"></div>
      </div>

      <HomeParagraph>
        Find me on
        <HomeLink url="https://github.com/tzq0301">GitHub</HomeLink>
        ,
        <HomeLink url="https://blog.csdn.net/m0_46261993">CSDN</HomeLink>
        ,
        <HomeLink url="https://www.zhihu.com/people/tong-zhao-qi-52">知乎</HomeLink>
        or
        <HomeLink url="https://space.bilibili.com/21378920">哔哩哔哩</HomeLink>
        .
      </HomeParagraph>

      <HomeParagraph>
        Mail me at
        <HomeLink url="tzq0301@gmail.com">tzq0301@gmail.com</HomeLink>
        .
      </HomeParagraph>

      <HomeParagraph>
        <a href="https://beian.miit.gov.cn/" class="text-gray-500 text-sm">浙 ICP 备 20029529 号</a>
      </HomeParagraph>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "../components/Container.vue"
import HomeParagraph from "../components/home/HomeParagraph.vue"
import HomeLink from "../components/home/HomeLink.vue"
</script>

