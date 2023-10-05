<template>
  <div class="gap-5">
    <h1 class="font-bold text-2xl border-spacing-40 border-b-red-700 border-2">Landing App Component</h1>
    <nav class="text-blue-600 space-x-4 my-7">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/demo">Demo</RouterLink>
      <RouterLink to="/login">Auth</RouterLink>
    </nav>
    <main class="">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<style scoped>
nav > a {
  @apply p-2 bg-sky-200 rounded hover:bg-sky-800 hover:text-white;
}
</style>