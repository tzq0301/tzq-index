<template>
  <div class="flex">
    <div class="mx-auto w-2/5 text-gray-700">
      <div class="text-3xl text-black my-12 font-bold">Projects</div>

      <DefaultTimeLine>
        <DefaultTimeLineItem
            time="July 2022"
            name="基于文本与图像情感分析的智能音乐推荐系统"
            introduction="Best Implementation of Topic Cloud Computing during NUS Summer Workshop">
          <LearnMoreButton url="https://github.com/tzq0301/debuggers-backend" content="Backend Code"/>
          &nbsp;
          <LearnMoreButton url="https://github.com/tzq0301/debuggers-frontend" content="Frontend Code"/>
        </DefaultTimeLineItem>

        <DefaultTimeLineItem
            time="May 2022"
            name="字影｜智能创作平台"
            introduction="An Intelligent Creation Platform (AIGC Utility). National Second Prize of China Software Cup">
          <LearnMoreButton url="https://github.com/tzq0301/a9-backend" content="Backend Code"/>
          &nbsp;
          <LearnMoreButton url="https://github.com/tzq0301/title-generation-v4" content="AI Code"/>
          &nbsp;
          <LearnMoreButton url="http://www.cnsoftbei.com/plus/view.php?aid=729"/>
        </DefaultTimeLineItem>

        <DefaultTimeLineItem
            time="May 2022"
            name="依法乡随"
            introduction="National Third Prize of WeChat Miniprogram Contest">
        </DefaultTimeLineItem>

        <DefaultTimeLineItem
            time="May 2022"
            name="高性能分布式连接查询优化设计与实现">
          <LearnMoreButton url="https://github.com/2063436123/cnsoftbei-a8" content="Code"/>
          &nbsp;
          <LearnMoreButton url="http://www.cnsoftbei.com/plus/view.php?aid=725"/>
        </DefaultTimeLineItem>

        <DefaultTimeLineItem
            time="February 2022"
            name="基于微服务架构的心理咨询系统"
            introduction="Psychological counseling system based on micro-service architecture">
          <LearnMoreButton url="https://github.com/tzq0301/pcs" content="Backend Code"/>
        </DefaultTimeLineItem>

        <DefaultTimeLineItem
            time="January 2022"
            name="“与星星同行”自闭症融合教育平台"
            introduction="四川省志愿服务项目大赛铜奖">
          <LearnMoreButton url="https://gitee.com/tzq0301/stars" content="Code"/>
        </DefaultTimeLineItem>

        <DefaultTimeLineItem
            time="July 2021"
            name="基于微服务架构的“五个一百”网络正能量精品项目申报系统"
            introduction="Based on the micro-service architecture of &quot;five one hundred&quot; network positive energy boutique project declaration system">
          <LearnMoreButton url="https://github.com/tzq0301/fhapp-cloud" content="Backend Code"/>
        </DefaultTimeLineItem>

        <DefaultTimeLineItem
            time="January 2021"
            name="基于一致的延迟嵌入库普曼编码机的时间序列预测"
            introduction="Developing an Embedding, Koopman and Autoencoder Technologies-Based Multi-Omics Time Series Predictive Model (EKATP) for Systems Biology research">
          <LearnMoreButton url="https://pubmed.ncbi.nlm.nih.gov/34764986/" content="Thesis"/>
          &nbsp;
          <LearnMoreButton url="https://github.com/tzq0301/EKATP" content="Code of Thesis"/>
          &nbsp;
          <LearnMoreButton url="https://github.com/tzq0301/EKATP_Flask" content="Code of Project"/>
        </DefaultTimeLineItem>
      </DefaultTimeLine>

      <div class="h-16"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LearnMoreButton from "../components/LearnMoreButton.vue"
import DefaultTimeLine from "../components/timeline/default/DefaultTimeLine.vue"
import DefaultTimeLineItem from "../components/timeline/default/DefaultTimeLineItem.vue"
</script>

<style scoped>

</style>