<template>
  <div class="">
    <label
      :class="`input flex items-center m-0 border gap-2 ${theme} ${
        errors?.length && 'border-1.5 border-red-500'
      }`"
    >
      <slot name="prepend" />
      <input
        :type="type"
        :name="name"
        class="outline-none bg-transparent w-full"
        :placeholder="placeholder"
        @input="
          (event: Event) =>
            $emit('update:modelValue', (event.target as HTMLInputElement).value)
        "
      />
      <slot name="append" />
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

defineEmits(["update:modelValue"]);

withDefaults(
  defineProps<{
    label?: string;
    firstName?: string;
    modelValue: string | number;
    placeholder?: string;
    theme?: string;
    type?: "text" | "email" | "number" | "date";
    errors?: ErrorObject[];
    name?: string;
  }>(),
  {
    placeholder: "",
    type: "text",
    name: "",
  },
);
</script>
