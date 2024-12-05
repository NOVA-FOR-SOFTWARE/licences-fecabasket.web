<template>
  <div :class="`text-sm rounded-full font-medium px-3 py-1.5 ${theme}`">
    {{ title }}
  </div>
</template>
<script setup lang="ts">
defineProps<{
  theme: string;
  title: string;
}>();
</script>
<style scoped>
.blue {
  @apply bg-blue-100 text-blue-500;
}

.red {
  @apply bg-blue-100 text-blue-500;
}

.green {
  @apply bg-green-100 text-green-500;
}

.orange {
  @apply bg-blue-100 text-blue-500;
}
</style>
