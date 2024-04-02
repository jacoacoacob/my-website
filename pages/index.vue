<script setup lang="ts">
import type { WorkContent, PersonalProjectContent } from "../content-types";

import imageUrl from "~/public/me.jpg";

const { public: { domain } } = useRuntimeConfig();

const title = "Jacob Albright - Software Engineer";
const description = "Hello, you can call me Jacob Albright. I am a Madison, WI based software engineer and this is a collection of some of projects I've worked on over the years.";

useServerSeoMeta({
    title,
    description,
    ogUrl: `https://${domain}`,
    ogTitle: title,
    ogDescription: description,
    ogType: "website",
    ogImage: imageUrl,
    ogImageHeight: 400,
    ogImageWidth: 400,
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterImage: imageUrl,
    twitterImageHeight: 400,
    twitterImageWidth: 400,
});

</script>

<template>
  <div class="prose dark:prose-invert">
    <header class="sticky left-0 top-0 -mx-2 px-2  bg-white dark:bg-slate-950 z-10">
      <div class="border-b border-slate-400 dark:border-slate-700 py-4">
        <h1 class="my-0">Experience</h1>
      </div>
    </header>
    <section>
      <h2>Work</h2>
      <ContentList :query="{ path: '/_work' }">
        <template #="{ list }: { list: WorkContent[] }">
          <ul class="space-y-6 p-0 list-none">
            <WorkItem
              v-for="content in list"
              :key="content._id"
              :content="content"
            />
          </ul>
        </template>
      </ContentList>
    </section>
    <section>
      <h2>Projects</h2>
      <ContentList :query="{ path: '/_personal' }">
        <template #default="{ list }: { list: PersonalProjectContent[] }">
          <ul class="space-y-6 p-0 list-none">
            <ProjectItem
              v-for="content in list"
              :key="content._id"
              :content="content"
            />
          </ul>
        </template>
        <template #not-found></template>
      </ContentList>
    </section>
  </div>
</template>