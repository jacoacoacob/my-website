
<script setup lang="ts">

const { slug, title } = defineProps<{
  title: string;
  slug?: string;
  kind?: string;
  theme: "cyan" | "fuchsia" | "emerald" | "orange";
}>();

const headerId = slug ?? slugify(title);

const enableHoverEffects = false;

</script>

<template>
  <li
    class="
      relative 
      prose dark:prose-invert rounded p-4 space-y-2
      transition ring-1 ring-slate-400 dark:ring-slate-700
    "
    :class="{
      'hover:shadow-xl hover:ring-2 dark:hover:shadow-slate-800': enableHoverEffects,
      'hover:ring-fuchsia-500 hover:dark:ring-fuchsia-800 hover:bg-fuchsia-100/10 hover:dark:bg-fuchsia-700/10': enableHoverEffects && theme === 'fuchsia',
      'hover:ring-cyan-500 hover:dark:ring-cyan-800 hover:bg-cyan-100/10 hover:dark:bg-cyan-700/10': enableHoverEffects && theme === 'cyan',
      'hover:ring-emerald-500 hover:dark:ring-emerald-800 hover:bg-emerald-100/10 hover:dark:bg-emerald-700/10': enableHoverEffects && theme === 'emerald',
      'hover:ring-orange-500 hover:dark:ring-orange-800 hover:bg-orange-100/10 hover:dark:bg-orange-700/10': enableHoverEffects && theme === 'orange',
      // 'ring-fuchsia-500 dark:ring-fuchsia-800': theme === 'fuchsia',
      // 'ring-cyan-500 dark:ring-cyan-700': theme === 'cyan',
      // 'ring-emerald-500 dark:ring-emerald-800': theme === 'emerald',
      // 'ring-orange-500 dark:ring-orange-800': theme === 'orange',

    }"
  >
    <div
      v-if="kind"
      class="absolute top-2 right-2 p-1 rounded text-xs font-bold uppercase"
      :class="{
        // 'text-fuchsia-500 dark:text-fuchsia-700': theme === 'fuchsia',
        // 'text-cyan-500 dark:text-cyan-700': theme === 'cyan',
        // 'text-emerald-500 dark:text-emerald-700': theme === 'emerald',
        // 'text-orange-500 dark:text-orange-700': theme === 'orange',
      }"
    >
      {{ kind }}
    </div>
    <header class="anchor-heading flex">
      <h3 class="my-0 scroll-mt-[40px] dark:text-slate-200 font-bold font-mono" :id="headerId">
        {{ title }}
      </h3>
      <div class="relative w-8">
        <a class="anchor-heading__link absolute right-0" :href="`#${headerId}`">
          <IconLink class="h-5 w-5" />
        </a>
      </div>
    </header>
    <slot />
  </li>
</template>

<style scoped>
.anchor-heading:hover .anchor-heading__link {
  visibility: visible;
}

.anchor-heading__link {
  visibility: hidden;
}
</style>