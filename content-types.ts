import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface PersonalProjectContent extends ParsedContent {
    title: string;
    collaborative: boolean;
    years: string;
    homepageUrl?: string;
    githubUrl?: string;
    skills?: string[];
}

interface WorkContent extends ParsedContent {
    company: string;
    companyLinkedIn: string;
    employmentType: "Full-time" | "Part-time";
    position: string;
    location: string;
    years: string;
    description?: string[];
    skills?: string[];
}

interface MeContent extends ParsedContent {
    linkedInName: string;
    linkedInUrl: string;
    image: string;
    github: string[];
}

export type { MeContent, WorkContent, PersonalProjectContent };
