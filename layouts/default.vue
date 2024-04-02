<script setup lang="ts">
import type { MeContent } from "~/content-types";
</script>

<template>
  <main class="
    flex flex-col items-center px-4 space-y-6
    bg-white dark:bg-slate-950
    lg:flex-row lg:justify-center lg:items-start lg:space-y-0 lg:space-x-8
  ">
    <div class="pt-4 lg:sticky lg:top-2">
      <ContentQuery path="/_me" find="one" v-slot="{ data }: { data: MeContent }">
        <Me :content="data" />
      </ContentQuery>
    </div>
    <div>
      <slot />
    </div>
  </main>
</template>