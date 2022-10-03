<template>
  <li class="mb-10 ml-4">
    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ props.time }}</time>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ props.name }}</h3>
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ props.introduction }}</p>
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  time: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: false,
  },
})
</script>

<style scoped>

</style>