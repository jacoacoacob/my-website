<script setup lang="ts">

const canvas = ref<HTMLCanvasElement>();

onMounted(() => {
  const ctx = canvas.value?.getContext("2d") as CanvasRenderingContext2D;

  
});

</script>

<template>
  <canvas ref="canvas"></canvas>
</template>