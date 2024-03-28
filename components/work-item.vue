<script setup lang="ts">
import type { WorkContent } from "~/content-types";

const props = defineProps<{
    content: WorkContent
}>();

const {
    content: {
        position,
        location,
        company,
        companyLinkedIn,
        years,
        body,
        skills,
        _draft,
    }
} = props;

const isHovered = ref(false);

const anchorHash = slugify(`${position} at ${company}`);

</script>

<template>
    <li v-if="!_draft">
        <Card kind="work">
            <div class="sr-only">
                I worked as a {{ position }} for {{ company }} in 
                {{ location }} during the years {{ years }}.
            </div>
            <div class="font-mono space-y-1" aria-hidden>
                <div class="flex items-center justify-between">
                    <div
                        class="flex items-center space-x-3 flex-1"
                        @mouseenter="isHovered = true"
                        @mouseleave="isHovered = false"
                    >
                        <h2 class="my-0 scroll-mt-[72px]" :id="anchorHash">
                             {{ position }}
                        </h2>
                        <a v-if="isHovered" :href="'#' + anchorHash">
                            <IconLink class="h-7 w-7" />
                        </a>
                    </div>
                    <span class="badge text-white bg-black font-mono">
                        Work
                    </span>
                </div>
                <div class="flex items-center space-x-2">
                    <ExternalLink v-if="companyLinkedIn" :href="companyLinkedIn">
                        {{ company }}
                    </ExternalLink>
                    <span v-else>
                        {{ company }}
                    </span>
                </div>
                <div class="text-slate-500 dark:text-slate-400 text-sm font-semibold flex space-x-3">
                    <span>{{ years }}</span>
                    <span>•</span>
                    <span>{{ location }}</span>
                </div>
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