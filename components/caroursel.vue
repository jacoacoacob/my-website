<script setup lang="ts">

defineProps<{
  as: keyof HTMLElementTagNameMap
}>();

const children = ref<HTMLElement[]>([]);

function registerChild(element: HTMLElement) {
  if (
    !element.id ||
    children.value.findIndex((x) => x.id === element.id) > -1
  ) {
    console.warn(
      "Either missing or duplicate `id` detected in carousel child"
    );
  }
  children.value.push(element);
}

function unRegisterChild(element: HTMLElement) {
  children.value.splice(
    children.value.findIndex((x) => x.id === element.id)
  );
}

provide("registerChild", registerChild);
provide("unRegisterChild", unRegisterChild);


const { onScroll, inViewItems, listenForWheelOrSwipe, unlistenForWheelOrSwipe } = usePanelScroll(children);

onMounted(() => {
  listenForWheelOrSwipe();
  window.addEventListener("scroll", onScroll);
  onScroll();
});

onBeforeUnmount(() => {
  unlistenForWheelOrSwipe();
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <component :is="as">
    <pre class="fixed left-0 bottom-0">
{{ inViewItems }}
    </pre>
    <slot />
  </component>
</template>