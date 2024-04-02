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

const activeStack = ref<string[]>([]); 

const activeSection = computed(() => activeStack.value[activeStack.value.length - 1]);

function pushActive(value: string) {
  if (!activeStack.value.includes(value)) {
    activeStack.value.push(value);
  }
}

function removeActive(value: string) {
  activeStack.value.splice(
    activeStack.value.indexOf(value),
    1
  );
}

const projectsSection = ref<HTMLElement>();
const workSection = ref<HTMLElement>();

const sections = [["Projects", projectsSection], ["Work", workSection]] as const;

const showBreadcrumbHeader = ref(false);

function onScroll() {
  showBreadcrumbHeader.value = window.scrollY > 270;
}

onMounted(() => {

  onScroll();

  window.addEventListener("scroll", onScroll);

  sections.forEach(([label, domRef]) => {
    const io = new IntersectionObserver((entries) => {
      const [item] = entries;
      if (
        item.intersectionRect.bottom === 0 &&
        item.intersectionRect.height === 0 &&
        item.intersectionRect.left === 0 &&
        item.intersectionRect.right === 0 &&
        item.intersectionRect.top === 0 &&
        item.intersectionRect.width === 0
      ) {
        return;
      }
      if (item.isIntersecting) {
        pushActive(label);
      } else {
        removeActive(label);
      }
    }, { threshold: [0.01, 0.05, 0.1], root: document });

    if (domRef.value) {
      io.observe(domRef.value);
    }
  });
});

</script>

<template>
  <div class="prose dark:prose-invert">
    <HomePageHeader :activeSection="activeSection" class="hidden lg:block" />
    <TransitionGroup name="breadcrumbs">
      <div class="lg:hidden sticky top-0 z-10" key="header">
        <HomePageHeader v-if="showBreadcrumbHeader" :activeSection="activeSection" />
      </div>
      <section ref="projectsSection" key="projects">
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
      <section ref="workSection" key="work">
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