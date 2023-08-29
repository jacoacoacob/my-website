<script setup lang="ts">
import { PersonalProjectContent } from '~/content-types';

const props = defineProps<{
    content: PersonalProjectContent
}>();

const {
    content: {
        title,
        years,
        githubUrl,
        homepageUrl,
        body,
        _draft
    }
} = props;
</script>

<template>
    <li v-if="!_draft">
        <Card>
            <div class="font-mono space-y-3 dark:text-slate-200 ">
                <div class="space-y-1">
                    <div class="flex items-center justify-between">
                        <h2 class="my-0 dark:text-slate-200 ">
                            {{ title }}
                        </h2>
                        <Badge>PERSONAL PROJECT</Badge>
                    </div>
                    <div class="text-slate-500 dark:text-slate-400 text-sm font-semibold">
                        {{ years }}
                    </div>
                </div>
                <ul v-if="githubUrl || homepageUrl" class="list-none p-0 -m-1 text-sm">
                    <li>
                        <ExternalLink v-if="githubUrl" :href="githubUrl" class="no-underline font-semibold">
                            <IconGithub class="h-5 w-5" /> <span>Repository</span>
                        </ExternalLink>
                    </li>
                    <li>
                        <ExternalLink v-if="homepageUrl" :href="homepageUrl" class="no-underline font-semibold">
                            <IconHome /> Homepage
                        </ExternalLink>
                    </li>
                </ul>
            </div>
            <div>
                <ContentRendererMarkdown :value="body" />
            </div>
        </Card>
    </li>
</template>