<script setup lang="ts">
import theSquirrelImgUrl from "~/public/the-squirrel.png";
import type { MeContent, WorkContent, PersonalProjectContent } from "~/content-types";

const { public: { domain } } = useRuntimeConfig();

const title = "Jacob Albright - Software Engineer";
const description = "Hello, you can call me Jacob Albright. I am a Madison, WI based software engineer and this is a collection of some of projects I've worked on over the years.";

useServerSeoMeta({
    title,
    description,
    ogUrl: `https://${domain}`,
    ogTitle: title,
    ogDescription: description,
    ogType: "website",
    ogImage: theSquirrelImgUrl,
    ogImageHeight: 400,
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterImage: theSquirrelImgUrl,
    twitterImageHeight: 400,
});

// useHead({
//     title,
//     meta: [
//         {
//             name: "description",
//             content: description
//         },
//         {
//             name: "twitter:card",
//             content: "summary_large_image",
//         },
//         {
//             name: "twitter:title",
//             content: title,
//         },
//         {
//             name: "twitter:description",
//             content: description,
//         },
//         {
//             name: "twitter:image",
//             content: theSquirrelImgUrl,
//         },
//         {
//             property: "twitter:domain",
//             content: domain,
//         },
//         {
//             property: "twitter:url",
//             content: `https://${domain}`,
//         },
//         {
//             property: "og:url",
//             content: `https://${domain}`,
//         },
//         {
//             property: "og:title",
//             content: title
//         },
//         {
//             property: "og:type",
//             content: "website",
//         },
//         {
//             property: "og:description",
//             content: description,
//         },
//         {
//             property: "og:image",
//             content: theSquirrelImgUrl
//         },
//         {
//             property: "og:image:height",
//             content: "300",
//         }

//     ]
// });
</script> 

<template>
    <main class="
        flex flex-col items-center px-4 space-y-6
        lg:flex-row lg:justify-center lg:items-start lg:space-y-0 lg:space-x-8
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