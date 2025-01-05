<template>
  <div>
    <div class="flex justify-between">
      <PlayersListFilter />
      <button onclick="addClubModal.showModal()" class="btn bg-green-500">
        <span>Nouveau club</span>
      </button>
    </div>
    <h2 class="my-6 text-xl font-semibold">Statistique globale</h2>
    <PlayerStatistics />
    <div class="card bg-[#FAFAFA] my-4">
      <div class="card-body">
        <div class="flex items-center justify-start">
          <img
            class="w-24"
            alt="logo FECABASKET black ad white"
            src="@/assets/logo.png"
          />
          <p class="text-2xl font-bold text-left ml-3">Fecabasket</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <template v-for="(groupedClub, index) in groupedClubs" :key="index">
          <div class="card bg-[#FAFAFA] my-4">
            <div class="card-body">
              <div class="border-b border-b-gray-200 pb-2 w-full">
                <h2 class="text-2xl font-semibold capitalize">{{ index }}</h2>
              </div>
              <div class="grid gap-4 pt-2">
                <div
                  role="button"
                  @click="router.push(`clubs/${club.id}`)"
                  v-for="(club, index) in groupedClub"
                  :key="index"
                  class="flex items-center gap-2"
                >
                  <EmptyTeamIcon class="h-12 w-12" />
                  <div class="flex flex-col">
                    <p class="text-lg 2xl:text-2xl font-semibold">
                      {{ club.name }}
                    </p>
                    <div
                      class="text-sm 2xl:text-base flex gap-1 divide-x divide-x-green text-green-500"
                    >
                      <span class="pl-1">{{ club.creationDate }}</span>
                      <span class="pl-1">{{ club.leaderName }}</span>
                      <span class="pl-1">{{ club.phoneNumber }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <DataGrid
      :column-headers="columns"
      shouldSelect
      :rows="clubRows"
      :isLoading="isLoading"
      hasTotal
      class="mt-8"
    >
      <template v-slot="{ row }">
        <tr
          @click="router.push(`clubs/${row.getId()}`)"
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
            <div v-if="header.key === 'logo'">
              <img
                :src="row.getTextFor(header.key) as string"
                class="w-6 h-6 rounded bg-gray-50"
                alt=""
              />
            </div>
            <span
              v-else-if="header.key === 'name'"
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
    <AddClub @close="shouldAddClub = false" class="w-full" />
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, defineAsyncComponent } from "vue";
import DataGrid from "@/components/DataGrid.vue";
import { ClubResources } from "@services/clubs/ClubResources";
import { Club } from "@services/clubs/entities/Club.entity";
import { useRouter } from "vue-router";
import { ClubView } from "@services/clubs/entities/Club.view";
import EyeIcon from "@/components/icons/EyeIcon.vue";
import EditPersonIcon from "@/components/icons/EditPersonIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import PlayerStatistics from "@/components/PlayerStatistics.vue";
import PlayersListFilter from "@/components/PlayersListFilter.vue";
import { groupClubsByLocality } from "@utils/club";
import EmptyTeamIcon from "@/components/icons/EmptyTeamIcon.vue";

const router = useRouter();

const isLoading = ref<boolean>(false);

const AddClub = defineAsyncComponent(() => import("./AddClubPage.vue"));
const shouldAddClub = ref<boolean>(false);

const columns = [
  { key: "logo", label: "🖼" },
  { key: "name", label: "Name" },
  { key: "leaderName", label: "Leader Name" },
  { key: "creationDate", label: "Creation Date" },
  { key: "email", label: "Email" },
  { key: "locality", label: "Locality" },
  { key: "phoneNumber", label: "Phone Number" },
  { key: "coach", label: "Coach" },
  { key: "folder", label: "Folder" },
  { key: "achievements", label: "Achievements" },
  { key: "jerseyColors", label: "Jersey Colors" },
  { key: "action", label: "Action" },
];

const clubs = ref<Club[]>([]);
const groupedClubs = ref<Record<string, Club[]>>({});
const clubRows = ref<ClubView[]>([]);

const fetchClubs = async () => {
  const { data, status } = await ClubResources.getAllClubs();
  if (status === "success" && data) {
    clubs.value = data;
    clubRows.value = data.map((club) => new ClubView(club));
    groupedClubs.value = groupClubsByLocality(data);
    console.log(groupedClubs.value);
  }
};

onBeforeMount(() => {
  fetchClubs();
});
</script>
