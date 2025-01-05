<template>
  <div class="">
    <label class="input flex items-center gap-4">
      <SearchIcon class="h-6 w-6" />
      <input type="text" :name="name" class="outline-none bg-transparent" :placeholder="placeholder" />
    </label>
  </div>
</template>
<script setup lang="ts">
import SearchIcon from './icons/SearchIcon.vue';

withDefaults(
  defineProps<{
    label?: string,
    firstName?: string,
    modelValue: string,
    placeholder?: string,
    theme?: string
  }>(), {
  placeholder: "Recherche...",
});
</script>
