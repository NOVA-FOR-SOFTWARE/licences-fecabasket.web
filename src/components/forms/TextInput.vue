<template>
  <div class="">
    <label :class="`input flex items-center gap-4 ${theme}`">
      <slot name="left" />
      <input type="text" :name="name" class="outline-none bg-transparent" :placeholder="placeholder" />
      <slot name="right" />
    </label>
  </div>
</template>
<script setup lang="ts">

withDefaults(
  defineProps<{
    label?: string,
    name?: string,
    modelValue: string | number,
    placeholder?: string,
    theme?: string,
    type?: string
  }>(), {
  placeholder: "",
  type: "text"
});
</script>