<script setup lang="ts">
import { useContentFilterOptions,  } from "~/composables/use-content-filter-options";

const contentFilterOptions = await useContentFilterOptions();

const filterSkills = ref<string[]>([]);
const filterProjectKind = ref<ProjectKind[]>([]);

provide("contentFilterOptions", contentFilterOptions);
provide("filterSkills", filterSkills);
provide("filterProjectKind", filterProjectKind);

</script>

<template>
    <slot></slot>    
</template>