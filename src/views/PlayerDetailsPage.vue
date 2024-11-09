<template>
  <div>
    <div class="breadcrumbs text-sm py-4 pb-6">
      <ul>
        <li class="text-gray-500"><RouterLink to="/players">Joueurs</RouterLink></li>
        <li>Profil du joeur</li>
      </ul>
    </div>
    <div class="bg-[#FAFAFA] rounded-xl p-6 flex gap-8">
      <div class="rounded-lg h-[270px] w-[270px] overflow-hidden">
        <img class="rounded-lg h-full w-full object-center object-cover"
          src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="Avatar Tailwind CSS Component" />
      </div>
      <div class="flex justify-between gap-x-4 divide-x-2">
        <div>
          <h2 class="font-semibold text-3xl uppercase">
            <span>Jaylen</span> <br>
            <span class="mt-2">Brown</span>
          </h2>
          <div class="grid gap-2.5 text-gray-500 mt-4 text-base 2xl:text-lg">
            <div class="flex gap-x-2">
              <CalendarIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
              <span>Bonaberie, Douala</span>
            </div>
            <div class="flex gap-x-2">
              <LocationIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
              <span>Bonaberie, Douala</span>
            </div>
            <div class="flex gap-x-2">
              <HomeIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
              <span>Bonamoussadi</span>
            </div>
            <div class="flex gap-x-2">
              <PhoneIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
              <span>+237 620 873 720</span>
            </div>
            <div class="bg-[#FFF5BF] text-black mt-2 py-2 px-4 rounded-full">jaylenbrown@gmail.com</div>
          </div>
        </div>
        <div class="flex justify-center min-w-48 flex-col gap-y-2.5 pl-4 text-gray-500 mt-4 text-base 2xl:text-lg">
          <div class="flex gap-x-2">
            <HandIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
            <span>Droite</span>
          </div>
          <div class="flex gap-x-2">
            <LocationIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
            <span>2,16 M</span>
          </div>
          <div class="flex gap-x-2">
            <HomeIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
            <span>1,90 M</span>
          </div>
          <div class="flex gap-x-2">
            <PhoneIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
            <span>105 KG</span>
          </div>
          <div class="flex gap-x-2">
            <TroffeesIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
            <span>Elite One</span>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <p class="text-[116px] px-4 font-bold text-green-500">#7</p>
        </div>
      </div>
    </div>
    <DataGrid :columns="columns" shouldSelect :rows="[]" class="mt-8"></DataGrid>
  </div>
</template>
<script setup lang="ts">
import DataGrid from '@/components/DataGrid.vue';
import CalendarIcon from '@/components/icons/CalendarIcon.vue';
import HandIcon from '@/components/icons/HandIcon.vue';
import HomeIcon from '@/components/icons/HomeIcon.vue';
import LocationIcon from '@/components/icons/LocationIcon.vue';
import PhoneIcon from '@/components/icons/PhoneIcon.vue';
import TroffeesIcon from '@/components/icons/TroffeesIcon.vue';

const columns = [

  {
    key: "picture",
    label: "🖼",
  },
  {
    key: "fullName",
    label: "Nom & Prénom",
  },
  {
    key: "club",
    label: "Club",
  },
  {
    key: "post",
    label: "Poste",
  },
  {
    key: "adress",
    label: "Adresse",
  },
  {
    key: "status",
    label: "Statut",
  },
  {
    key: "action",
    label: "Action",
  },
]

</script>