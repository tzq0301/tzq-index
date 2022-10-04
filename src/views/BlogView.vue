<template>
  <Container title="Blog">
    <BlogYearBlock year="2022">
      <BlogBlock title="怎么进行你的代码优化 & 编译器怎么优化你的代码" introduction="在编程世界中，处处都是代码优化。以下所述的众多优化中，有些是编译器会帮我们做的优化，有些是我们在程序编写中就可以进行的代码优化。" route-path="how-to-optimize-your-code"/>
      <BlogBlock title="Docker 删除 <none> 镜像" route-path="docker-remove-none-images"/>
    </BlogYearBlock>

<!--    <BlogYearBlock year="2021">-->

<!--    </BlogYearBlock>-->
  </Container>
</template>

<script lang="ts" setup>
import BlogYearBlock from "../components/blog/BlogYearBlock.vue"
import BlogBlock from "../components/blog/BlogBlock.vue"
import Container from "../components/Container.vue"
</script>

<style scoped>

</style>