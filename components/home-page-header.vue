<script setup lang="ts">
defineProps<{ activeSection?: "Projects" | "Work" }>();

</script>

<template>
  <header class="sticky left-0 top-0 -mx-2 px-2 pt-2 bg-white dark:bg-slate-950 z-10" data-bug-box>
    <div class="border-b border-slate-400 dark:border-slate-700 font-mono flex justify-between">
      <div>
        <h1 class="text-lg m-0">Jacob Albright</h1>
        <ul class="list-none font-bold  text-sm flex items-center gap-2 p-0 -mx-1 my-0">
          <li>Experience</li>
          <li class="text-sm">></li>
          <li>
            <Transition name="fade">
              <span v-if="activeSection === 'Projects'">Projects</span>
              <span v-else-if="activeSection === 'Work'">Work</span>
            </Transition>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
}
</style>