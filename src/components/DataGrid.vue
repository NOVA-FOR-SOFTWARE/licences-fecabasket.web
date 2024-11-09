<!--<template>-->
<!--  <div class="w-full overflow-x-auto">-->
<!--    <table class="w-full table table-xs table-fixed text-left">-->
<!--      <thead class="border-none rounded-full overflow-hidden mb-2 px-6">-->
<!--        <tr class="rounded-full border-none overflow-hidden">-->
<!--          <th v-if="shouldSelect" class="bg-[#FAFAFA] w-16 rounded-l-lg">-->
<!--            <div class="form-control">-->
<!--              <label class="cursor-pointer label">-->
<!--                <input type="checkbox" checked class="checkbox checkbox-xs" />-->
<!--              </label>-->
<!--            </div>-->
<!--          </th>-->
<!--          <th-->
<!--            v-for="column in columns"-->
<!--            :key="column.key"-->
<!--            class="bg-[#FAFAFA] py-4 font- last:rounded-r-lg"-->
<!--          >-->
<!--            {{ column.label }}-->
<!--          </th>-->
<!--        </tr>-->
<!--        <tr class="h-4 border-none"></tr>-->
<!--      </thead>-->
<!--      <tbody class="pt-4 border-none">-->
<!--        <tr-->
<!--          class="hover border-none"-->
<!--          @click="router.push('/players/aasd-asa33223s-5ss2f3def-3232')"-->
<!--        >-->
<!--          <td class="bg-[#FAFAFA] py-4 font- last:rounded-r-lg">-->
<!--            <label>-->
<!--              <input type="checkbox" class="checkbox checkbox-xs" />-->
<!--            </label>-->
<!--          </td>-->
<!--          <td class="w-49">-->
<!--            <div class="avatar">-->
<!--              <div class="mask mask-squircle h-12 w-12">-->
<!--                <img-->
<!--                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"-->
<!--                  alt="Avatar Tailwind CSS Component"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--          </td>-->
<!--          <td>-->
<!--            <p class="w-full runcate">-->
<!--              <span class="font-bold">Hart Hagerty</span> <br />-->
<!--              <span class="text-sm opacity-50">United Makossa</span>-->
<!--            </p>-->
<!--          </td>-->
<!--          <td>spur</td>-->
<!--          <td>Purple</td>-->
<!--          <td>-->
<!--            <button class="btn btn-ghost btn-xs">details</button>-->
<!--          </td>-->
<!--          <td>-->
<!--            <span class="badge badge-primary badge-sm">En attente</span>-->
<!--          </td>-->
<!--        </tr>-->
<!--      </tbody>-->
<!--    </table>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="w-full">
    <table class="w-full table">
      <thead class="bg-blue-primary text-white text-left">
        <tr>
          <th v-if="hasIndex">#</th>
          <th
            v-for="columnHeader in columnHeaders"
            :key="columnHeader.key"
            class="p-4 px-4"
            data-test="header-col-label"
          >
            {{ columnHeader.label }}
          </th>
        </tr>
      </thead>
      <tbody class="w-full">
        <template v-if="!isLoading">
          <template v-if="rows.length">
            <template v-for="(row, index) in rows" :key="index">
              <slot :row="row" :index="index">
                <tr
                  data-test-id="item"
                  :data-test="row.getId()"
                  class="bg-gray-500"
                >
                  <td v-if="hasIndex">{{ index + 1 }}</td>
                  <td
                    v-for="(columnHeader, index) in columnHeaders"
                    :key="index"
                  >
                    {{ row.getTextFor(columnHeader.key) }}
                  </td>
                </tr>
              </slot>
            </template>
          </template>
          <div v-else data-test="no-data">
            <tr class="text-center w-full">
              <td>Nothing to display</td>
            </tr>
          </div>
        </template>
      </tbody>
    </table>
    <div
      v-if="isLoading"
      class="w-full border flex items-center justify-center p-4"
    >
      <SpinnerLoader class="h-12 w-12" />
    </div>
    <div class="flex justify-between items-center border-t">
      <div
        v-if="hasTotal"
        data-test="total-title"
        class="text-gray-800 text-md font-semibold p-4 font-sourceSansPro-Regular bg-white w-full rounded-b-md flex items-center"
      >
        <span class="mr-2"> {{ totalElementTitle }} : </span>
        <SpinnerLoader
          v-if="isLoading"
          class="h-[20px] w-[20px] border-[3.5px]"
        />
        <span v-else>
          {{ rows.length }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import { DataGridRow, DataGridColumnHeader } from '@/utils/type'
import SpinnerLoader from '@/components/SpinnerLoader.vue'

const props = defineProps({
  columnHeaders: {
    type: Array as PropType<DataGridColumnHeader>,
    required: true,
  },
  rows: {
    type: Array as PropType<DataGridRow>,
    required: true,
  },
  hasTotal: {
    type: Boolean,
    default: true,
  },
  totalElementTitle: {
    type: String,
    default: 'Total',
  },
  hasHeadersFixed: {
    type: Boolean,
    default: true,
  },
  hasPaggination: {
    type: Boolean,
    default: true,
  },
  isLoading: {
    type: Boolean,
  },
  hasIndex: {
    type: Boolean,
  },
})
</script>
