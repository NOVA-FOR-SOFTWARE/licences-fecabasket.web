<template>
  <div class="pt-4">
    <div class="flex justify-between">
      <PlayersListFilter />
      <button onclick="addPlayerModal.showModal()" class="btn bg-green-500">
        <span>Nouveau joueur</span>
      </button>
    </div>
    <h2 class="my-6 text-xl font-semibold">Statistique globale</h2>
    <PlayerStatictics />
<!--    <DataGrid :columns="columns" shouldSelect :rows="[]" class="mt-8"></DataGrid>-->
    <AddPlayer @close="shouldAddPlayer = false" @added="fetchPlayers" class="w-full" />
  </div>
</template>
<script setup lang="ts">
import DataGrid from '@/components/DataGrid.vue';
import PlayersListFilter from '@/components/PlayersListFilter.vue';
import PlayerStatictics from '@/components/PlayerStatictics.vue';
import { defineAsyncComponent, ref } from 'vue';

const AddPlayer = defineAsyncComponent(() => import("./AddPlayerPage.vue"));
const shouldAddPlayer = ref<boolean>(false);
const fetchPlayers = () => { }

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
