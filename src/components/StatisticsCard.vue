<template>
  <div class="bg-[#FAFAFA] rounded-lg px-4 py-5">
    <div class="flex justify-between items-start">
      <div>
        <h5 class="text-gray-500 text-sm">{{ sublabel }}</h5>
        <h4 class="text-lg pt-2 font-semibold">{{ label }}</h4>
      </div>
      <slot name="icon" />
    </div>
    <div class="flex gap-8 items-center mt-2">
      <p class="text-4xl text-green-500 w-1/2">{{ value }}</p>
      <div>
        <slot name="background" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  label: string,
  sublabel: string,
  value: string,
}>()
</script>