<template>
  <div class="w-screen h-screen bg-[#EEEEEE] overflow-hidden flex">
    <SidebarMenu class="w-[80px] xl:w-[350px] 2xl:w-[400px]" />
    <div class="w-full relative h-screen overflow-y-auto">
      <MainHeader />
      <main class="pt-24 px-4 overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import SidebarMenu from "@/components/SidebarMenu.vue";
import MainHeader from "@/components/MainHeader.vue";
</script>
