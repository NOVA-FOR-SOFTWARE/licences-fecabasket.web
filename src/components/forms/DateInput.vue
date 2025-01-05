<template>
  <div class="">
    <label
      :class="`input flex items-center gap-2 ${theme} ${
        errors?.length ? 'outline-red-500' : 'dark:focus:outline-blue-600'
      }`"
    >
      <slot name="left" />
      <input
        type="text"
        :name="name"
        class="outline-none bg-transparent"
        :placeholder="placeholder"
        @input="
          (event: Event) =>
            $emit('update:modelValue', (event.target as HTMLInputElement).value)
        "
      />
      <slot name="right" />
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
// :class="[
// 'rounded border px-3 py-1 w-full mt-2 bg-transparent outline-none dark:text-gray-100 dark:border-gray-700',
//   errors.length
//     ? 'outline-red-500'
//     : isValid
//       ? 'outline-green-500 dark:outline-green-600'
//       : 'focus:outline-blue-500 dark:focus:outline-blue-600',
// ]"
import type { ErrorObject } from "@vuelidate/core";

defineEmits(["update:modelValue"]);
// const emit = defineEmits(["update:modelValue"]);
withDefaults(
  defineProps<{
    label?: string;
    firstName?: string;
    modelValue: string | number;
    placeholder?: string;
    theme?: string;
    type?: "text" | "email" | "number";
    errors?: ErrorObject[];
  }>(),
  {
    placeholder: "",
    type: "text",
  },
);
</script>
