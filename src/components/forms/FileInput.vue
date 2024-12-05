<template>
  <div class="">
    <label>
      <span
        v-if="label"
        class="file-name d-flex h-full inline-flex items-center text-slate-600 dark:text-slate-400 text-lg font-medium mb-1"
      >
        {label}
      </span>
      <input
        type="file"
        @change="onChange"
        class="bg-red-400 w-full hidden"
        :name="name"
        :id="id"
        :accept="accept"
        :multiple="multiple"
        :placeholder="placeholder"
      />
      <div
        :class="`w-full border border-red-600 cursor-pointer pl-0 border-none flex items-center ${className}`"
      >
        <img
          v-if="preview && modelValue"
          :src="modelValue ? getURL(modelValue) : ''"
          class="w-full h-full block object-cover rounded-md my-2 border border-slate-200"
        />
        <div
          v-else
          :class="`border-2 border-dashed rounded-md w-full h-full p-4 flex justify-center items-center  ${errors?.length && 'border-1.5 border-red-500'}`"
        >
          <span class="text-gray-500 font-semibold text-center">
            {{ !modelValue ? placeholder : modelValue?.name }}
          </span>
        </div>
        v
      </div>
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

withDefaults(
  defineProps<{
    name?: string;
    label?: string;
    placeholder?: string;
    preview?: boolean;
    accept?: string;
    className?: string;
    id?: string;
    required?: boolean;
    modelValue: File | null;
    multiple?: boolean;
    errors?: ErrorObject[];
  }>(),
  {
    required: false,
    accept: "images/png",
    preview: false,
    placeholder: "",
    multiple: false,
  },
);

const emit = defineEmits(["update:modelValue"]);

const onChange = (event) => {
  emit("update:modelValue", event?.target?.files[0]);
};

const getURL = (file: File) => URL.createObjectURL(file);
</script>
