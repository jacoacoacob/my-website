<script setup lang="ts">
import type { MeContent } from "~/content-types";

const props = defineProps<{
    content: MeContent;
}>();

const {
    content: {
        github,
        linkedInName,
        linkedInUrl,
        image,
        body,
    },
} = props;
</script>

<template>
    <div class="
        hidden
        sm:flex sm:space-x-6 sm:space-y-6
        lg:block lg:space-x-0
    ">
        <NuxtPicture
            :src="image"
            :imgAttrs="{
                class: 'rounded max-h-44 sm:max-h-64'
            }"
        />
        <div class="space-y-6 dark:text-slate-200">
            <ul class="font-bold space-y-2">
                <li v-for="username in github" :key="username">
                    <ExternalLink :href="`https://github.com/${username}`">
                      <IconGithub /> {{ username }}
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink :href="linkedInUrl">
                        <IconLinkedin /> {{ linkedInName }}
                    </ExternalLink>
                </li>
            </ul>
            <ContentRendererMarkdown
                class="prose dark:prose-invert max-w-sm"
                :value="body"
            />
        </div>
    </div>
    <div class="space-y-6 sm:hidden">
        <div class="flex space-x-4">
            <NuxtPicture
                :src="image"
                :imgAttrs="{
                    class: 'rounded max-h-40'
                }"
            />
            <ul class="font-bold space-y-2 self-center">
                <li v-for="username in github" :key="username">
                    <ExternalLink :href="`https://github.com/${username}`">
                      <IconGithub /> {{ username }}
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink :href="linkedInUrl">
                        <IconLinkedin /> {{ linkedInName }}
                    </ExternalLink>
                </li>
            </ul>
        </div>
        <ContentRendererMarkdown
                class="prose dark:prose-invert max-w-sm"
                :value="body"
            />
    </div>
</template>