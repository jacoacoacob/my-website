<script setup lang="ts">
import type { MeContent, WorkContent, PersonalProjectContent } from "../content-types";

const {  } = usePanelScroll(window);


onMounted(() => {

})

</script>

<template>
  <div>
    <section>
      <h2>Projects</h2>
      <ContentList :query="{ path: '/_personal' }">
        <template #default="{ list }: { list: PersonalProjectContent[] }">
          <ul class="space-y-4 p-0 list-none">
            <ProjectItem v-for="content in list" :key="content._id" :content="content" />
          </ul>
        </template>
        <template #not-found></template>
      </ContentList>
    </section>
  </div>
</template>