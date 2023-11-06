<script setup lang="ts">
import type { MeContent, WorkContent, PersonalProjectContent } from "~/content-types";

const filterSkills = inject<Ref<string[]>>("filterSkills")!;
const filterProjectKind = inject<Ref<ProjectKind[]>>("filterProjectKind")!;
</script>

<template>
    <main class="
        flex flex-col items-center px-4 space-y-6
        lg:flex-row lg:justify-center lg:items-start lg:space-y-0 lg:space-x-8
    ">
        <div class="pt-4 lg:sticky lg:top-2">
            <ContentQuery path="/_me" find="one" v-slot="{ data }">
                <Me :content="(data as MeContent)" />
            </ContentQuery>
        </div>
        <div class="space-y-10">
            <div
                class="
                    prose prose-sm prose-li:p-0 prose-headings:my-0 prose-ul:p-0
                    dark:prose-invert
                    sm:prose-base
                "
            >
                <ContentList
                    :query="{
                        path: '_work',
                        where: [
                            filterSkills.length ? { skills: { $containsAny: filterSkills } } : {},
                        ],
                    }"
                >
                    <template #default="{ list }">
                        <ul class="space-y-4 p-0 list-none">
                            <WorkItem
                                v-for="content, i in (list as WorkContent[])"
                                :key="i"
                                :content="content"
                            />
                        </ul>
                    </template>
                    <template #not-found></template>
                </ContentList>
                <ContentList
                    :query="{
                        path: '/_personal',
                        where: [
                            filterSkills.length ? { skills: { $containsAny: filterSkills } } : {},
                        ],
                    }"
                >
                    <template #default="{ list }">
                        <ul class="space-y-4 p-0 list-none">
                            <PersonalItem
                                v-for="content, i in (list as PersonalProjectContent[])"
                                :key="i"
                                :content="content"
                            />
                        </ul>
                    </template>
                    <template #not-found></template>
                </ContentList>
            </div>
        </div>
    </main>
</template>