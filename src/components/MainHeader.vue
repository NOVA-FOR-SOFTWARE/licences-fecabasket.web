<template>
  <header class="flex gap-2 justify-between items-center absolute w-full px-6 top-10 left-0">
    <div class="rounded bg-[#FAFAFA] px-4 py-1.5 w-2/6 h-12">
      <p class="text-xs text-gray-500 m-0 p-0">Bienvenue,</p>
      <p class="text-[15px] font-bold w-full truncate m-0 p-0">Sophie cooper</p>
    </div>
    <SearchInput class="w-full bg-[#FAFAFA] rounded" v-model="search" />
    <div class="rounded-full justify-center items-center bg-[#FAFAFA] h-12 p-3.5 w-12 flex">
      <NotificationIcon class="text-black stroke-black h-6 w-6" />
    </div>
    <div class="avatar">
      <div class="w-12 rounded-full">
        <img class="w-12 h-12 rounded-full border-2 border-green-500"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import NotificationIcon from './icons/NotificationIcon.vue';
import SearchInput from './SearchInput.vue';

const search = ref<string>("");
</script>
