<script setup lang="ts">
import type { PersonalProjectContent } from '~/types/personal-project-content';
import type { WorkContent } from '~/types/work-content';
</script> 

<template>
    <main class="flex justify-center py-2">
        <div class="prose w-full">
            <ContentList path="/_work" v-slot="{ list }">
                <ul class="space-y-4 p-0 list-none">
                    <WorkItem
                        v-for="content, i in (list as WorkContent)"
                        :key="i"
                        :content="content"
                    />
                </ul>
            </ContentList>
            <ContentList path="/_personal" v-slot="{ list }">
                <ul class="space-y-4 p-0 list-none">
                    <PersonalItem
                        v-for="content, i in (list as PersonalProjectContent)"
                        :key="i"
                        :content="content"
                    />
                </ul>
            </ContentList>
        </div>
    </main>
</template>