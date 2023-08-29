<script setup lang="ts">
import type { MeContent, WorkContent, PersonalProjectContent } from "~/content-types";
</script> 

<template>
    <main class="
        flex flex-col items-center px-4 space-y-6
        lg:flex-row lg:justify-center lg:items-start lg:space-y-0 lg:space-x-6
    ">
        <div class="pt-4 lg:sticky lg:top-2">
            <ContentQuery path="/_me" find="one" v-slot="{ data }: { data: MeContent }">
                <Me :content="data" />
            </ContentQuery>
        </div>
        <div class="
            prose prose-sm prose-li:p-0 prose-headings:my-0 prose-ul:p-0
            dark:prose-invert
            sm:prose-base
        ">
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