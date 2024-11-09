<template>
  <div className="">
    <label>
      <span v-if="label"
        className="file-name d-flex  h-full inline-flex items-center text-slate-600 dark:text-slate-400 text-lg font-medium mb-1">
        {label}
      </span>
      <input type="file" class="hidden" @change="(event) => $emit('update:modelValue', event.target?.files[0])"
        className="bg-red-400 w-full hidden" :name="name" :id="id" :accept="accept" :multiple="false"
        :placeholder="placeholder" />
      <div :className="`w-full border border-red-600 cursor-pointer pl-0 border-none flex items-center ${className}`">
        <div v-if="!modelValue"
          className="border-2 border-dashed rounded-md w-full h-full p-4 flex justify-center items-center">
          <span className="text-gray-500 font-semibold text-center">
            {{ placeholder }}
          </span>
        </div>
        <img v-else-if="preview" :src="modelValue ? URL.createObjectURL(modelValue) : ''"
          className="w-full  h-full block object-contain rounded-md my-2 border border-slate-200" />
      </div>
    </label>
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    name?: string,
    label?: string,
    placeholder?: string,
    preview?: boolean,
    accept?: string,
    className?: string,
    id?: string,
    required?: boolean,
    modelValue: string,
  }>(), {
  required: false,
  accept: "images/png",
  preview: false,
  placeholder: ""
});

defineEmits(['update:modelValue'])
</script>