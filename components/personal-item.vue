<script setup lang="ts">
import { PersonalProjectContent } from '~/types/personal-project-content';

const props = defineProps<{
    content: PersonalProjectContent
}>();

const {
    content: {
        title,
        years,
        githubUrl,
        homePageUrl,
        body
    }
} = props;
</script>

<template>
    <Card kind="personal project">
        <div class="font-mono space-y-3">
            <div class="space-y-1">
                <div class="flex items-center justify-between">
                    <h2 class="my-0">
                        {{ title }}
                    </h2>
                    <Badge>PERSONAL PROJECT</Badge>
                </div>
                <div class="text-slate-500 text-sm font-semibold">
                    {{ years }}
                </div>
            </div>
            <ul v-if="githubUrl || homePageUrl" class="list-none p-0 -m-1 text-sm">
                <li>
                    <ExternalLink v-if="githubUrl" :href="githubUrl" class="no-underline font-semibold">
                        <IconGithub class="h-5 w-5" /> <span>Repository</span>
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink v-if="homePageUrl" :href="homePageUrl" class="no-underline font-semibold">
                        <IconHome /> Homepage
                    </ExternalLink>
                </li>
            </ul>
        </div>
        <div>
            <ContentRendererMarkdown :value="body" />
        </div>
    </Card>
</template>