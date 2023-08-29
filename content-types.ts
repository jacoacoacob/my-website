import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface PersonalProjectContent extends ParsedContent {
    title: string;
    years: string;
    homePageUrl?: string;
    githubUrl?: string;
}

interface WorkContent extends ParsedContent {
    company: string;
    companyLinkedIn: string;
    employmentType: "Full-time" | "Part-time";
    position: string;
    location: string;
    years: string;
    description?: string[];
}

interface MeContent extends ParsedContent {
    linkedIn: string;
    image: string;
    github: string[];
}

export type { MeContent, WorkContent, PersonalProjectContent };
