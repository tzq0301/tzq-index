<template>
  <a href="#" class="my-6 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100" @click="jump('/blog/' + props.routePath)">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ props.title }}</h5>
    <p class="font-normal text-gray-700 mb-1">{{ props.introduction }}</p>
    <time>2022-9-2</time>
  </a>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  routePath: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: false,
  },
})

const jump = (routePath: string) => {
  router.push(routePath)
}
</script>

<style scoped>

</style>