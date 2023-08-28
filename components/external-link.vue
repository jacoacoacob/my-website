<script setup lang="ts">
defineProps<{
    text?: string;
}>();
</script>

<template>
    <a rel="noopener noreferrer" target="_blank">
        <slot>
            {{ text }}
        </slot>
    </a>
</template>