<script setup lang="ts">
const registerChild = inject<(element: HTMLElement) => void>("registerChild")!;
const unRegisterChild = inject<(element: HTMLElement) => void>("unRegisterChild")!;

const self = ref<HTMLElement>();

defineProps({
  id: {
    required: true,
    type: String,
    validate: (value: string) => value.length > 0,
  },
})

onMounted(() => {
  registerChild(self.value!);
});

onBeforeUnmount(() => {
  unRegisterChild(self.value!);
});
</script>

<template>
  <div ref="self" :id="id">
    <slot />
  </div>
</template>