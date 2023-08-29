<script setup lang="ts">
import type { MeContent, WorkContent, PersonalProjectContent } from "~/content-types";
</script> 

<template>
    <main class="
        flex flex-col items-center space-x-6 py-2 px-4
        lg:flex-row lg:justify-center lg:items-start
    ">
        <div class=" pt-6 lg:sticky lg:top-2">
            <ContentQuery path="/_me" find="one" v-slot="{ data }: { data: MeContent }">
                <Me :content="data" />
            </ContentQuery>
        </div>
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