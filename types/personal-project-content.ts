import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface PersonalProjectContent extends ParsedContent {
    title: string;
    years: string;
    homePageUrl?: string;
    githubUrl?: string;
}

export type { PersonalProjectContent };
