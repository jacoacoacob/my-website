<script setup lang="ts">
import type { MeContent } from "~/content-types";


const {
  canvas,
  animate,
  stopAnimation,
  setup: setupFeatureBug,
  teardown: teardownFeatureBug,
} = useFeatureBug();

onMounted(() => {
  setupFeatureBug();
  animate();
});

onBeforeUnmount(() => {
  teardownFeatureBug();
});
</script>

<template>
  <main class="
    flex flex-col items-center px-4 space-y-6 relative 
    bg-white dark:bg-slate-950 min-h-screen
    lg:flex-row lg:justify-center lg:items-start lg:space-y-0 lg:space-x-8
  ">
    <canvas ref="canvas" class="fixed z-10"></canvas>
    <div class="pt-4 lg:sticky lg:top-2 z-20" data-bug-box>
      <ContentQuery path="/_me" find="one" v-slot="{ data }: { data: MeContent }">
        <Me :content="data" />
      </ContentQuery>
    </div>
    <div class="z-20">
      <slot />
    </div>
  </main>
</template>