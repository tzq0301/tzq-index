<template>
  <a class="text-black font-bold underline underline-offset-4 decoration-gray-300 hover:decoration-orange-200 hover:text-orange-400" :href="props.url" @click="assign">
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  url: String
})

const assign = () => {
  window.location.assign(props.url!)
}
</script>

<style scoped>

</style>