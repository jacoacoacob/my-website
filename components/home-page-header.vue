<script setup lang="ts">
defineProps<{ activeSection?: string }>();
</script>

<template>
  <header class="sticky left-0 top-0 -mx-2 px-2 pt-2 bg-white dark:bg-slate-950 z-10">
    <div class="border-b border-slate-400 dark:border-slate-700 font-mono flex justify-between">
      <div>
        <h1 class="text-lg m-0">Jacob Albright</h1>
        <ul class="list-none font-bold  text-sm flex items-center gap-2 p-0 -mx-1 my-0">
          <li>Experience</li>
          <li class="text-sm">></li>
          <li>{{ activeSection }}</li>
        </ul>
      </div>
    </div>
  </header>
</template>