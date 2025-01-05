<template>
  <div class="pt-4">
    <div class="flex justify-between">
      <PlayersListFilter />
      <button onclick="addPlayerModal.showModal()" class="btn bg-green-500">
        <span>Nouveau joueur</span>
      </button>
    </div>
    <h2 class="my-6 text-xl font-semibold">Statistique globale</h2>
    <PlayerStatistics />
    <DataGrid
      :column-headers="columns"
      shouldSelect
      :rows="playerRows"
      :isLoading="isLoading"
      hasTotal
      class="mt-8"
    >
      <template v-slot="{ row }">
        <tr
          @click="handleClick(row.getId())"
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
            <span v-else-if="header.key === 'status'">
              <StatusBadge
                class="max-w-min"
                :title="PlayerStatusLabel[row.getTextFor(header.key)]"
                :theme="PlayerStatusTheme[row.getTextFor(header.key)]"
              />
            </span>
            <div v-else-if="header.key === 'action'" class="flex gap-1.5">
              <button
                @click="handleClick(row.getId())"
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
    <AddPlayer
      @close="shouldAddPlayer = false"
      @created="handleCreated"
      class="w-full"
    />
  </div>
</template>
<script setup lang="ts">
import DataGrid from "@/components/DataGrid.vue";
import PlayersListFilter from "@/components/PlayersListFilter.vue";
import PlayerStatistics from "@/components/PlayerStatistics.vue";
import { defineAsyncComponent, onBeforeMount, ref } from "vue";
import { Player } from "@services/user/entities/Player.entity";
import {
  PlayerStatusLabel,
  PlayerStatusTheme,
  PlayerView,
} from "@services/user/entities/Player.view";
import type { DataGridColumnHeader } from "@core/type";
import { PlayerResources } from "@services/user/PlayerResources";
import StatusBadge from "@/components/StatusBadge.vue";
import EyeIcon from "@/components/icons/EyeIcon.vue";
import EditPersonIcon from "@/components/icons/EditPersonIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const AddPlayer = defineAsyncComponent(() => import("./AddPlayerPage.vue"));
const shouldAddPlayer = ref<boolean>(false);

const isLoading = ref<boolean>(false);
const players = ref<Player[]>([]);
const playerRows = ref<PlayerView[]>([]);

const fetchPlayers = async () => {
  isLoading.value = true;
  const playersFetched = await PlayerResources.getAllPlayers();
  if (playersFetched.status === "success") {
    players.value = playersFetched.data;

    playerRows.value = playersFetched.data.map(
      (player) => new PlayerView(player),
    );
  }
  isLoading.value = false;
};

const handleCreated = () => {
  addPlayerModal?.closeModal()
  fetchPlayers();
}

const handleClick= (id: string) => {
  console.log(id);
  router.push(`players/${id}`)
}

const columns: DataGridColumnHeader[] = [
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
    key: "league",
    label: "Ligue",
  },
  {
    key: "status",
    label: "Statut",
  },
  {
    key: "action",
    label: "Action",
  },
];

onBeforeMount(() => {
  fetchPlayers();
});
</script>
