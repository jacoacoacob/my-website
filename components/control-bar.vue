<script setup lang="ts">
import { Listbox, ListboxButton, ListboxLabel, ListboxOptions, ListboxOption } from "@headlessui/vue";
const { skills, projectKind } = await useContentFilterOptions();

const filterSkills = inject<Ref<string[]>>("filterSkills")!;
const filterProjectKind = inject<Ref<ProjectKind[]>>("filterProjectKind")!;

const skillKeys = computed(() => Object.keys(skills).sort((a, b) => skills[b] - skills[a]));

</script>
class="py-4 "
<template>
    <nav 
        class="
            flex justify-between mt-6 p-8 rounded
            bg-slate-200
            sticky top-0 z-10
           dark:bg-slate-900
        "
    >
        <h1 class="text-xl dark:text-white font-bold">Experience</h1>
        <div class="dark:text-white flex space-x-4">
            <Listbox multiple v-model="filterSkills">
                <div class="relative">
                    <div class="flex flex-col items-start">
                        <ListboxLabel>
                            Skills
                        </ListboxLabel>
                        <ListboxButton>
                            <ul v-if="filterSkills.length" class="flex flex-wrap space-x-2 p-4 border rounded">
                                <li class="badge" v-for="skill in filterSkills">
                                    {{ skill }}
                                </li>
                            </ul>
                            <div v-else>
                                Filter by skills
                            </div>
                        </ListboxButton>
                    </div>
                    <ListboxOptions
                        as="ul"
                        class="
                            absolute mt-1 max-h-60 w-full overflow-auto rounded-md p-2 text-base shadow-lg ring-1 ring-opacity-5 focus:outline-none sm:text-sm
                            bg-white ring-black
                            dark:bg-black
                        "
                    >
                        <ListboxOption
                            v-slot="{ active, selected }: { active: boolean, selected: boolean }"
                            v-for="skill in skillKeys"
                            :key="skill"
                            :value="skill"
                            as="li"
                            class="badge"
                        >
                            <span>{{ skill }}</span> <span>{{ skills[skill] }}</span>
                        </ListboxOption>
                    </ListboxOptions>
                </div>
            </Listbox>
            <Listbox multiple v-model="filterProjectKind">
                <div class="relative">
                    <ListboxButton>
                        <ul v-if="filterProjectKind.length">
                            <li class="badge" v-for="kind in filterProjectKind">
                                {{ kind }}
                            </li>
                        </ul>
                        <div v-else>
                            Project type
                        </div>
                    </ListboxButton>
                    <ListboxOptions>
                        <ListboxOption
                            v-slot="{ active, selected }: { active: boolean, selected: boolean }"
                            v-for="kind in projectKind"
                            :key="kind"
                            :value="kind"
                        >
                            <span>{{ kind }}</span>
                        </ListboxOption>
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    </nav>
</template>