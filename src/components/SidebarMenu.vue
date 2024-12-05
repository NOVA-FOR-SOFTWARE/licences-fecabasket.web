<template>
  <section class="rounded-r-xl overflow-y-auto bg-[#FAFAFA]">
    <div class="w-full xl:pr-4 pt-4 flex justify-center xl:justify-end">
      <button class="p-2 hover:bg-gray-100 rounded-lg hover:outline hover:outline-gray-500">
        <MenuIcon class="w-5 h-5" />
      </button>
    </div>
    <div class="py-4 pl-6 xl:pl-10 flex flex-col items-left">
      <img class="w-28 hidden xl:inline" alt="logo FECABASKET black ad white" src="@/assets/logo.png" />
      <p class="text-2xl font-bold text-center xl:hidden 2xl:block 2xl:text-left">F<span class="2xl:inline">ecabasket</span></p>
    </div>
    <ul class=" pl-4 xl:pl-8 space-y-2">
      <li v-for="sideMenuItem in sideMenuItems" :key="sideMenuItem.title"
        :class="`text-[#777271] text-base  pr-4 rounded-sm ${route.meta?.title === sideMenuItem.title && 'border-r-2 border-[#09B064]'}`">
        <RouterLink
          :class="`w-full px-3 p-2 2xl:p-3 2xl:px-4 flex items-center hover:bg-[#E9FEF4] rounded-sm gap-3 2xl:gap-4 ${route.meta?.title === sideMenuItem.title && 'bg-[#E9FEF4]'}`"
          :to="sideMenuItem.link">
          <component :is="sideMenuItem.icon"
            :class="`w-4 h-4 2xl:h-6 2xl:w-6 ${route.meta?.title === sideMenuItem.title && 'stroke-[#09B064] stroke-2 text-[#09B064]'}`" />
          <span
            :class="`text-base hidden xl:inline 2xl:text-lg ${route.meta?.title === sideMenuItem.title && 'text-[#0A0B0A] font-semibold'}`">
            {{ sideMenuItem.label }}
          </span>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import DashboardIcon from './icons/DashboardIcon.vue';
import PlayerIcon from './icons/PlayerIcon.vue';
import ClubIcon from './icons/ClubIcon.vue';
import OfficielIcon from './icons/OfficielIcon.vue';
import TrainersIcon from './icons/TrainersIcon.vue';
import TrainningCentersIcon from './icons/TrainningCentersIcon.vue';
import NotificationIcon from './icons/NotificationIcon.vue';
import PrintIcon from './icons/PrintIcon.vue';
import TroffeesIcon from './icons/TroffeesIcon.vue';
import CompetitionIcon from './icons/CompetitionIcon.vue';
import MenuIcon from './icons/MenuIcon.vue';

const route = useRoute();

const sideMenuItems = [
  {
    title: "dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
    link: "/"
  },
  {
    title: "clubs",
    label: "Clubs",
    icon: ClubIcon,
    link: "/clubs"
  },
  {
    title: "players",
    label: "Joueurs",
    icon: PlayerIcon,
    link: "/players"
  },
  {
    title: "officiels",
    label: "Officiels",
    icon: OfficielIcon,
    link: "/officiels"
  },
  {
    title: "trainers",
    label: "Entraineurs",
    icon: TrainersIcon,
    link: "/trainers"
  },
  {
    title: "trainning-centers",
    label: "Centres de formation",
    icon: TrainningCentersIcon,
    link: "/trainning-centers"
  },
  {
    title: "notifications",
    label: "Notifications",
    icon: NotificationIcon,
    link: "/notifications"
  },
  {
    title: "imprimes",
    label: "imprimes",
    icon: PrintIcon,
    link: "/"
  },
  {
    title: "recompences",
    label: "Recompences",
    icon: TroffeesIcon,
    link: "/"
  },
  {
    title: "competitions",
    label: "Competitions",
    icon: CompetitionIcon,
    link: "#"
  }
];
</script>
