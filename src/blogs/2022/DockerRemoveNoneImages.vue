<template>
  <Container title="Docker 删除 <none> 镜像">
    <BlogH1>为什么会有 &lt;none&gt; 镜像</BlogH1>

    <BlogParagraph>Docker 使用久了会出现很多名字为 &lt;none&gt; 的镜像，这些镜像大致可分为两类：有用镜像和无用镜像</BlogParagraph>

    <BlogH2>有用镜像</BlogH2>

    <BlogParagraph>通过 docker images -a 命令才会显示的 &lt;none&gt; 镜像，这些镜像是镜像分层的中间镜像，同时这些镜像不会造成空间损耗</BlogParagraph>

    <BlogH2>无用镜像</BlogH2>

    <BlogParagraph>通过 docker images 命令显示的 &lt;none&gt; 镜像，这些镜像是由于新加镜像占用了原有镜像的标签，原有镜像就变成了 &lt;none&gt; 镜像</BlogParagraph>

    <BlogParagraph>这些 &lt;none&gt; 镜像叫做空悬镜像（dangling images），同时 Docker 并没有自动删除这些镜像的机制</BlogParagraph>

    <BlogH1>怎么删除 &lt;none&gt; 镜像呢</BlogH1>

    <BlogCodeBlock>$ docker imae prune</BlogCodeBlock>

    <BlogParagraph>如果 Docker 版本不够高，可以使用以下命令：</BlogParagraph>

    <BlogCodeBlock>$ docker rmi $(docker images -f "dangling=true" -q)</BlogCodeBlock>
  </Container>
</template>

<script setup lang="ts">

import Container from "@/components/Container.vue";
import BlogH1 from "@/components/blog/BlogH1.vue";
import BlogParagraph from "@/components/blog/BlogParagraph.vue";
import BlogH2 from "@/components/blog/BlogH2.vue";
import BlogCodeBlock from "@/components/blog/BlogCodeBlock.vue";
</script>

<style scoped>

</style>