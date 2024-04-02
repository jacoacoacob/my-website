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

const {
  activeSection,
  workSection,
  projectsSection,
  showBreadcrumbHeader,
  setup: setupBreadcrumbs,
  teardown: teardownBreadcrumbs,
} = useDynamicBreadcrumbSections();

onMounted(() => {
  setupBreadcrumbs();
});

onBeforeUnmount(() => {
  teardownBreadcrumbs();
});

</script>

<template>
  <div class="prose dark:prose-invert">
    <HomePageHeader :activeSection="(activeSection as any)" class="hidden lg:block" />
    <TransitionGroup name="breadcrumbs">
      <div class="lg:hidden sticky top-0 z-10" key="header">
        <HomePageHeader v-if="showBreadcrumbHeader" :activeSection="(activeSection as any)" />
      </div>
      <section ref="workSection" key="work">
        <h2>Work</h2>
        <ContentList :query="{ path: '/_work' }">
          <template #="{ list }: { list: WorkContent[] }">
            <ul class="space-y-6 p-0 list-none">
              <WorkItem
                v-for="content in list"
                :key="content._id"
                :content="content"
                data-bug-box
              />
            </ul>
          </template>
        </ContentList>
      </section>
      <section ref="projectsSection" key="projects">
        <h2>Projects</h2>
        <ContentList :query="{ path: '/_personal' }">
          <template #default="{ list }: { list: PersonalProjectContent[] }">
            <ul class="space-y-6 p-0 list-none">
              <ProjectItem
                v-for="content in list"
                :key="content._id"
                :content="content"
                data-bug-box
              />
            </ul>
          </template>
          <template #not-found></template>
        </ContentList>
      </section>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.breadcrumbs-move, /* apply transition to moving elements */
.breadcrumbs-enter-active,
.breadcrumbs-leave-active {
  transition: all 0.2s ease;
}

.breadcrumbs-enter-from,
.breadcrumbs-leave-to {
  transform: translateY(-60px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.breadcrumbs-leave-active {
  position: absolute;
}
</style>