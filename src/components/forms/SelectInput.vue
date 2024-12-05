<template>
  <div class="w-full">
    <label class="form-control w-full max-w-xs">
      <div class="label" v-if="label">
        <span class="label-text">{{ label }}</span>
      </div>
      <select
        @change="
          (event: Event) =>
            $emit('update:modelValue', (event.target as HTMLInputElement).value)
        "
        :class="`select bg-transparent ${selectClass} w-full ${
          errors?.length && 'border-1.5 border-red-500'
        }`"
      >
        <option v-if="placeholder" class="text-gray-300" disabled selected>
          {{ placeholder }}
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </label>
    <template v-if="errors?.length">
      <p
        v-for="error in errors"
        :data-test="error.$property"
        :key="error.$uid"
        class="pt-1 text-red-500 transition delay-500 text-sm"
      >
        {{ error.$message }}
      </p>
    </template>
  </div>
</template>
<script setup lang="ts">
import type { ErrorObject } from "@vuelidate/core";

type Option = {
  value: string;
  label: string;
};

defineProps<{
  label?: string;
  name?: string;
  modelValue: string;
  placeholder?: string;
  theme?: string;
  options: Option[];
  selectClass?: string;
  errors?: ErrorObject[];
}>();
</script>
