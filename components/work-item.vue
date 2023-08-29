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
        employmentType,
        years,
        body,
        _draft,
    }
} = props;

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
                    <h2 class="my-0">
                         {{ position }}
                    </h2>
                    <Badge>WORK</Badge>
                </div>
                <div class="flex items-center space-x-2">
                    <ExternalLink v-if="companyLinkedIn" :href="companyLinkedIn">
                        {{ company }}
                    </ExternalLink>
                    <span v-else>
                        {{ company }}
                    </span>
                    <span>•</span>
                    <span>{{ employmentType }}</span>
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
        </Card>
    </li>
</template>