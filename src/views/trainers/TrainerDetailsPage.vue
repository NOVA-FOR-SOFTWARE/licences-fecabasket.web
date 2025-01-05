<template>
  <div>
    <div class="breadcrumbs text-sm py-4 pb-6">
      <ul>
        <li class="text-gray-500">
          <RouterLink to="/trainers">Trainers</RouterLink>
        </li>
        <li>Player Profile</li>
      </ul>
    </div>
    <div class="bg-[#FAFAFA] rounded-xl p-6 flex gap-8">
      <div class="rounded-lg h-[270px] w-[270px] overflow-hidden">
        <img
          class="rounded-lg h-full w-full object-center object-cover"
          :src="trainer.photo"
          alt="Player Photo"
        />
      </div>
      <div class="flex justify-between gap-x-4 divide-x-2">
        <div>
          <h2 class="font-semibold text-3xl uppercase">
            <span>{{ trainer.firstName }}</span>
          </h2>
          <div class="grid gap-2.5 text-gray-500 mt-4 text-base 2xl:text-lg">
            <div class="flex gap-x-2">
              <CalendarIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
              <span>{{ trainer.birthDate }}</span>
            </div>
            <div class="flex gap-x-2">
              <LocationIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
              <span>{{ trainer.birthPlace }}</span>
            </div>
            <div class="flex gap-x-2">
              <PhoneIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
              <span>{{ trainer.phoneNumber }}</span>
            </div>
            <div class="bg-[#FFF5BF] text-black mt-2 py-2 px-4 rounded-full">
              {{ trainer.email }}
            </div>
          </div>
        </div>
        <div
          class="flex justify-center min-w-48 flex-col gap-y-2.5 pl-4 text-gray-500 mt-4 text-base 2xl:text-lg"
        >
          <div class="flex gap-x-2">
            <HandIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
            <span>{{ trainer.club }}</span>
          </div>
          <div class="flex gap-x-2">
            <LocationIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
            <span>{{ trainer.folder }}</span>
          </div>
          <div class="flex gap-x-2">
            <HomeIcon class="w-4 h-4 2xl:w-6 2xl:h-6" />
            <span>{{ trainer.achievements }}</span>
          </div>
        </div>
      </div>
    </div>
<!--    <DataGrid-->
<!--      :columns="columns"-->
<!--      shouldSelect-->
<!--      :rows="[]"-->
<!--      class="mt-8"-->
<!--    ></DataGrid>-->
  </div>
</template>

<script setup lang="ts">
import DataGrid from "@/components/DataGrid.vue";
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import HandIcon from "@/components/icons/HandIcon.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import LocationIcon from "@/components/icons/LocationIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import { TrainerResources } from "@services/user/TrainerResources";
import { onBeforeMount, ref } from "vue";
import {
  nullTrainerEntity,
  Trainer,
} from "@services/user/entities/Trainer.entity";
import { useRoute } from "vue-router";

const columns = [
  {
    key: "photo",
    label: "🖼",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "firstName",
    label: "First Name",
  },
  {
    key: "club",
    label: "Club",
  },
  {
    key: "achievements",
    label: "Achievements",
  },
  {
    key: "action",
    label: "Action",
  },
];

const isLoading = ref<boolean>(false);
const trainer = ref<Trainer>(nullTrainerEntity());

const route = useRoute();

const fetchTrainerDetails = async () => {
  isLoading.value = true;
  const { data, status } = await TrainerResources.getTrainerById(
    (route.params?.id ?? "") as string,
  );
  if (status === "success" && data) {
    trainer.value = data;
  }
  isLoading.value = false;
};

onBeforeMount(() => {
  fetchTrainerDetails();
});
</script>
