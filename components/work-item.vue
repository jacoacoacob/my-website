<script setup lang="ts">
import type { WorkContent } from "~/content-types";

const props = defineProps<{
  content: WorkContent
}>();

const {
  content: {
    position,
    location,
    company,
    companyLinkedIn,
    years,
    body,
    skills,
    _draft,
    _id,
  }
} = props;
</script>

<template>
  <ExperienceListItem
    v-if="!_draft"
    :title="position"
    :slug="slugify(`${position} at ${company}`)"
    theme="cyan"
  >
    <div>
      <ExternalLink v-if="companyLinkedIn" :href="companyLinkedIn">
          {{ company }}
      </ExternalLink>
      <span v-else>
          {{ company }}
      </span>
    </div>
    <div class="text-slate-500 dark:text-slate-400 text-sm font-semibold flex space-x-3">
        <span>{{ years }}</span>
        <span>•</span>
        <span>{{ location }}</span>
    </div>
    <div v-if="skills">
      <ul class="flex flex-wrap gap-x-2 list-none p-0">
        <li class="badge my-1 ring-1 ring-slate-500" v-for="skill in skills">
          {{ skill }}
        </li>
      </ul>
    </div>
    <ContentRendererMarkdown :value="body" />
  </ExperienceListItem>
</template>