<script setup lang="ts">
import type { MeContent } from "~/content-types";

const props = defineProps<{
    content: MeContent;
}>();

const {
    content: {
        github,
        linkedIn,
        image,
        body
    },
} = props;
</script>

<template>
    <div class="
        space-y-6
        sm:flex sm:space-x-6 
        lg:block lg:space-x-0
    ">
        <NuxtPicture
            :src="image"
            :imgAttrs="{
                class: 'rounded max-h-64'
            }"
            class="max-h-"
        />
        <div class="space-y-6">
            <ul class="font-bold space-y-2">
                <li v-for="username in github" :key="username">
                    <ExternalLink :href="`https://github.com/${username}`">
                      <IconGithub /> {{ username }}
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink :href="linkedIn">
                        <IconLinkedin /> Jacob Albright
                    </ExternalLink>
                </li>
            </ul>
            <ContentRendererMarkdown
                class="prose max-w-sm"
                :value="body"
            />
        </div>
    </div>
</template>