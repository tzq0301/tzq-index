<template>
  <div class="text-2xl my-4">{{ props.year }}</div>
  <slot></slot>
</template>

<script setup lang="ts">
const props = defineProps({
  year: {
    required: true,
    type: String
  }
})
</script>

<style scoped>

</style>