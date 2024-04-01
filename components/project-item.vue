<script setup lang="ts">
import type { PersonalProjectContent } from '~/content-types';

const props = defineProps<{ content: PersonalProjectContent }>();

const {
  content: {
    _draft,
    title,
    githubUrl,
    homepageUrl,
    skills,
    body,
  }
} = props;

</script>

<template>
  <li v-if="!_draft" class="
    prose dark:prose-invert rounded p-4 space-y-2
    transition ring-1 ring-slate-400 dark:ring-slate-600
    hover:shadow-lg hover:ring-1 hover:ring-cyan-500 dark:hover:shadow-slate-800
  ">
    <header class="anchor-heading flex">
      <h3 class="my-0 scroll-mt-[40px] dark:text-slate-200 font-bold font-mono" :id="slugify(title)">
        {{ title }}
      </h3>
      <div class="relative w-8">
        <a class="anchor-heading__link absolute right-0" :href="`#${slugify(title)}`">
          <IconLink class="h-5 w-5" />
        </a>
      </div>
    </header>
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
    <section>
      <ContentRendererMarkdown :value="body" />
    </section>
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