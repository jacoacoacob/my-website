import { PersonalProjectContent, WorkContent } from "~/content-types";

type ProjectKind = "work" | "personal" | "personal/collaborative";

interface ContentFilterOptions {
    projectKind: ProjectKind[];
    skills: Record<string, number>;
}

async function useContentFilterOptions() {
    const { data: contentData } = await useAsyncData(() => Promise.all([
        queryContent<WorkContent>("_work").find(),
        queryContent<PersonalProjectContent>("_personal").find(),
    ]));

    const options: ContentFilterOptions = {
        skills: {},
        projectKind: [
            "work",
            "personal",
            "personal/collaborative",
        ],
    }

    if (contentData.value) {
        const [work, personal] = contentData.value;

        work.forEach((item) => {
            item.skills?.forEach((skill) => {
                if (!options.skills[skill]) {
                    options.skills[skill] = 0;
                }
                options.skills[skill] += 1;
            });
        });

        personal.forEach((item) => {
            item.skills?.forEach((skill) => {
                if (!options.skills[skill]) {
                    options.skills[skill] = 0;
                }
                options.skills[skill] += 1;
            });
        });
    }
    
    return options;
}

export { useContentFilterOptions };
export type { ContentFilterOptions, ProjectKind };
