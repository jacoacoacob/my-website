<script setup lang="ts">
import imageUrl from "~/public/me.jpg";

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
    ogImage: imageUrl,
    ogImageHeight: 400,
    ogImageWidth: 400,
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterImage: imageUrl,
    twitterImageHeight: 400,
    twitterImageWidth: 400,
});
</script> 

<template>
    <HomePageContentProvider>
        <HomePageContent />
    </HomePageContentProvider>
</template>