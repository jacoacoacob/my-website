import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface WorkContent extends ParsedContent {
    company: string;
    companyLinkedIn: string;
    employmentType: "Full-time" | "Part-time";
    position: string;
    location: string;
    years: string;
    description?: string[];
}

export type { WorkContent };
