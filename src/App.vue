<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header class="h-24">
    <nav class="w-screen relative">
      <div class="absolute right-36 top-12 -translate-y-1/2">
        <RouterLink to="/" class="mx-2 text-lg text-gray-500 hover:text-orange-400">
          Home
        </RouterLink>
        <RouterLink to="/blog" class="mx-2 text-lg text-gray-500 hover:text-orange-400">
          Blog
        </RouterLink>
        <RouterLink to="/projects" class="mx-2 text-lg text-gray-500 hover:text-orange-400">
          Projects
        </RouterLink>
      </div>
    </nav>
  </header>

  <RouterView/>
</template>

<style scoped>

</style>
