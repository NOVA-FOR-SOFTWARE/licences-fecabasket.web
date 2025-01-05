<template>
  <div class="pt-4">
    <div class="flex justify-between">
      <button onclick="addOfficialModal.showModal()" class="btn bg-green-500">
        <span>Nouveau officiel</span>
      </button>
    </div>
    <h2 class="my-6 text-xl font-semibold">Liste des officiels</h2>
    <DataGrid
      :column-headers="columns"
      shouldSelect
      :rows="officialRows"
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
            <div v-if="header.key === 'profilePicture'">
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
    <AddOfficial
      @close="shouldAddOfficial = false"
      @created="handleCreated"
      class="w-full"
    />
  </div>
</template>

<script setup lang="ts">
import DataGrid from "@/components/DataGrid.vue";
import { defineAsyncComponent, onBeforeMount, ref } from "vue";
import { Official } from "@services/official/entities/Official.entity";
import { OfficialView } from "@services/official/entities/Official.view";
import { OfficialResources } from "@services/official/OfficialResources";
import EyeIcon from "@/components/icons/EyeIcon.vue";
import EditPersonIcon from "@/components/icons/EditPersonIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const AddOfficial = defineAsyncComponent(() => import("./AddOfficialPage.vue"));
const shouldAddOfficial = ref<boolean>(false);

const isLoading = ref<boolean>(false);
const officials = ref<Official[]>([]);
const officialRows = ref<OfficialView[]>([]);

const fetchOfficials = async () => {
  isLoading.value = true;
  const { data, status } = await OfficialResources.getAllOfficials();
  if (status === "success" && data) {
    officials.value = data;
    officialRows.value = data.map((official) => new OfficialView(official));
  }
  isLoading.value = false;
};

const handleCreated = () => {
  addOfficialModal?.closeModal();
  fetchOfficials();
};

const handleClick = (id: string) => {
  router.push(`officials/${id}`);
};

const columns = [
  { key: "profilePicture", label: "🖼" },
  { key: "fullName", label: "Nom & Prénom" },
  { key: "residence", label: "Résidence" },
  { key: "phoneNumber", label: "Numéro de téléphone" },
  { key: "email", label: "Email" },
  { key: "grade", label: "Grade" },
  { key: "action", label: "Action" },
];

onBeforeMount(() => {
  fetchOfficials();
});
</script>
