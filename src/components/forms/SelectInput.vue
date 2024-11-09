<template>
  <div class="w-full">
    <label class="form-control w-full max-w-xs">
      <div class="label" v-if="label">
        <span class="label-text">{{ label }}</span>
      </div>
      <select :class="`select bg-transparent ${selectClass} w-full`">
        <option v-if="placeholder" disabled selected>{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
      </select>
    </label>
  </div>

</template>
<script setup lang="ts">
type Option = {
  value: string,
  label: string,
}

defineProps<{
  label?: string,
  name?: string,
  modelValue: string,
  placeholder?: string,
  theme?: string,
  options: Option[],
  selectClass?: string
}>();
</script>