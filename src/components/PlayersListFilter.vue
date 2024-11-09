<template>
  <div class="flex gap-x-2">
    <div class="button flex border bg-green-500 rounded-lg px-6 py-4 h-14 text-white space-x-2">
      <span class="">Filtre</span>
      <FilterIcon />
    </div>
    <div class="grid grid-cols-3  items-center px-4 bg-[#FAFAFA] rounded-lg divide-x-2 gap-6 w-[500px]">
      <SelectInput select-class="select-ghost" class="pl-4 justify-center" :model-value="filter.club" placeholder="Club"
        :options="[]" />
      <SelectInput select-class="select-ghost" class="pl-4" :model-value="filter.post" placeholder="Post"
        :options="[]" />
      <SelectInput select-class="select-ghost" class="pl-4" :model-value="filter.status" placeholder="Status"
        :options="[]" />
    </div>
    <button class="button flex border bg-gray-500 rounded-lg px-6 py-4 h-14 text-white space-x-2">
      <span class="">Clear</span>
    </button>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import SelectInput from './forms/SelectInput.vue';
import FilterIcon from './icons/FilterIcon.vue';

const filter = reactive<{
  club: string,
  post: string,
  status: string,
}>({
  club: "",
  post: "",
  status: "",
})
</script>
