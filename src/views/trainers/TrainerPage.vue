<template>
  <div>
    <div class="flex justify-between">
      <PlayersListFilter />
      <button onclick="addTrainerModal.showModal()" class="btn bg-green-500">
        <span>Nouveau coach</span>
      </button>
    </div>
    <h2 class="my-6 text-xl font-semibold">Statistique globale</h2>
    <PlayerStatistics />
    <DataGrid
      :column-headers="columns"
      shouldSelect
      :rows="trainerRows"
      :isLoading="isLoading"
      hasTotal
      class="mt-8"
    >
      <template v-slot="{ row }">
        <tr
          @click="router.push(`trainers/${row.getId()}`)"
          data-test-id="item"
          :data-test="row.getId()"
          class="cursor-pointer"
        >
          <td
            v-if="/*shouldSelect*/ true"
            class="bg-[#FAFAFA] w-16 rounded-l-lg"
          >
            <div class="form-control">
              <label data-test="select-all" class="cursor-pointer label">
                <input type="checkbox" checked class="checkbox checkbox-xs" />
              </label>
            </div>
          </td>
          <td
            v-for="(header, index) in columns"
            class="bg-[#FAFAFA] py-4 last:rounded-r-lg first:rounded-l-lg"
            :key="index"
          >
            <div v-if="header.key === 'picture'">
              <img
                :src="row.getTextFor(header.key) as string"
                class="w-6 h-6 rounded bg-gray-50"
                alt=""
              />
            </div>
            <span
              v-else-if="header.key === 'fullName'"
              class="inline-block truncate font-medium"
            >
              {{ row.getTextFor(header.key) }}
            </span>
            <div v-else-if="header.key === 'action'" class="flex gap-1.5">
              <button
                class="p-1 btn-xs hover:bg-blue-100 hover:text-blue-500 rounded"
              >
                <EyeIcon class="w-4 h-4" />
              </button>
              <button
                class="p-1 btn-xs hover:bg-green-100 hover:text-green-500 rounded"
              >
                <EditPersonIcon class="w-4 h-4" />
              </button>
              <button
                class="p-1 btn-xs hover:bg-red-100 hover:text-red-500 rounded"
              >
                <TrashIcon class="w-4 h-4" />
              </button>
            </div>
            <span v-else>
              {{ row.getTextFor(header.key) }}
            </span>
          </td>
        </tr>
      </template>
    </DataGrid>
    <AddTrainer
      v-if="shouldAddTrainer"
      @close="shouldAddTrainer = false"
      class="w-full"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, defineAsyncComponent } from "vue";
import DataGrid from "@/components/DataGrid.vue";
import { TrainerResources } from "@services/trainer/TrainerResources";
import { Trainer } from "@services/trainer/entities/Trainer.entity";
import { useRouter } from "vue-router";
import { TrainerView } from "@services/trainer/entities/Trainer.view";
import EyeIcon from "@/components/icons/EyeIcon.vue";
import EditPersonIcon from "@/components/icons/EditPersonIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import PlayerStatistics from "@/components/PlayerStatistics.vue";
import PlayersListFilter from "@/components/PlayersListFilter.vue";

const router = useRouter();

const isLoading = ref<boolean>(false);

const AddTrainer = defineAsyncComponent(() => import("./AddTrainerPage.vue"));
const shouldAddTrainer = ref<boolean>(false);

const columns = [
  { key: "photo", label: "🖼" },
  { key: "fullName", label: "Name" },
  { key: "email", label: "Email" },
  { key: "phoneNumber", label: "Numero de telephone" },
  { key: "club", label: "Club" },
  { key: "achievements", label: "Achievements" },
  { key: "action", label: "Action" },
];

const trainers = ref<Trainer[]>([]);
const trainerRows = ref<TrainerView[]>([]);

const fetchTrainers = async () => {
  const { data, status } = await TrainerResources.getAllTrainers();
  if (status === "success" && data) {
    trainers.value = data;
    trainerRows.value = data.map((trainer) => new TrainerView(trainer));
  }
};

onBeforeMount(() => {
  fetchTrainers();
});
</script>
