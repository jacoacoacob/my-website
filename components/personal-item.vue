<script setup lang="ts">
import { PersonalProjectContent } from '~/content-types';

const props = defineProps<{
    content: PersonalProjectContent
}>();

const {
    content: {
        title,
        collaborative,
        years,
        githubUrl,
        homepageUrl,
        skills,
        body,
        _draft
    }
} = props;

const isHovered = ref(false);

</script>

<template>
    <li v-if="!_draft">
        <Card>
            <div class="font-mono space-y-3 dark:text-slate-200 ">
                <div class="space-y-1">
                    <div class="flex items-center justify-between space-x-1">
                        <div
                            class="flex items-center space-x-3 flex-1"
                            @mouseenter="isHovered = true"
                            @mouseleave="isHovered = false"
                        >
                            <!-- <h2 class="my-0 scroll-mt-10 sm:scroll-mt-11 dark:text-slate-200" :id="slugify(title)"> -->
                            <h2 class="my-0 scroll-mt-[72px] dark:text-slate-200" :id="slugify(title)">
                                {{ title }}
                            </h2>
                            <a v-if="isHovered" :href="`#${slugify(title)}`">
                                <IconLink class="h-7 w-7" />
                            </a>
                        </div>
                        <span class="badge text-white bg-black font-mono">
                            Personal{{ collaborative ? "/Collaborative" : "" }}
                        </span>
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
            <div v-if="skills">
                <ul class="flex flex-wrap space-x-2 list-none">
                    <li class="badge" v-for="skill in skills">
                        {{ skill }}
                    </li>
                </ul>
            </div>
        </Card>
    </li>
</template>