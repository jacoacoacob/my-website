<script setup lang="ts">
import type { PersonalProjectContent } from '~/content-types';

const props = defineProps<{ content: PersonalProjectContent }>();

const {
  content: {
    _draft,
    _id,
    title,
    githubUrl,
    homepageUrl,
    skills,
    body,
  }
} = props;

</script>

<template>
  <ExperienceListItem v-if="!_draft" :title="title" :slug="slugify(`project-${title}`)" theme="fuchsia">
    <ul v-if="githubUrl || homepageUrl" class="list-none px-0 -m-1 text-sm">
      <li>
        <ExternalLink v-if="githubUrl" :href="githubUrl" class="no-underline font-semibold">
          <IconGithub class="h-[18px] w-[18px]" /> <span>Repository</span>
        </ExternalLink>
      </li>
      <li>
        <ExternalLink v-if="homepageUrl" :href="homepageUrl" class="no-underline font-semibold">
          <IconHome class="h-[18px] w-[18px]" /> <span>Homepage</span>
        </ExternalLink>
      </li>
    </ul>
    <ul v-if="skills" class="flex flex-wrap gap-x-2 list-none p-0">
      <li class="badge my-1 ring-1 ring-slate-500" v-for="skill in skills">
        {{ skill }}
      </li>
    </ul>
    <ContentRendererMarkdown :value="body" />
  </ExperienceListItem>
</template>
