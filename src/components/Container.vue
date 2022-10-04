<template>
  <div class="flex">
    <div class="mx-auto w-2/5 text-gray-700">
      <div class="text-3xl text-black my-12 font-bold">{{ props.title }}</div>
      <slot></slot>
      <div class="h-16"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>

</style>