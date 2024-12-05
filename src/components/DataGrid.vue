<template>
  <div class="w-full overflow-x-auto">
    <table class="w-full table table-xs table-fixed text-left">
      <thead class="border-none rounded-full overflow-hidden mb-2 px-6">
        <tr class="rounded-full border-none overflow-hidden">
          <th v-if="shouldSelect" class="bg-[#FAFAFA] w-16 rounded-l-lg">
            <div class="form-control">
              <label data-test="select-all" class="cursor-pointer label">
                <input type="checkbox" checked class="checkbox checkbox-xs" />
              </label>
            </div>
          </th>
          <th v-if="hasIndex" class="bg-[#FAFAFA] w-16 rounded-l-lg">#</th>
          <th
            v-for="columnHeader in columnHeaders"
            :key="columnHeader.key"
            :class="`bg-[#FAFAFA] py-4 last:rounded-r-lg ${hasIndex && 'first:rounded-l-lg'}`"
            data-test="header-col-label"
          >
            {{ columnHeader.label }}
          </th>
        </tr>
      </thead>

      <tbody class="w-full">
        <template v-if="!isLoading && rows.length">
          <template v-for="(row, index) in rows" :key="index">
            <slot :row="row" :index="index">
              <tr data-test-id="item" :data-test="row.getId()" class="">
                <td v-if="shouldSelect" class="bg-[#FAFAFA] w-16 rounded-l-lg">
                  <div class="form-control">
                    <label data-test="select-all" class="cursor-pointer label">
                      <input type="checkbox" checked class="checkbox checkbox-xs" />
                    </label>
                  </div>
                </td>
                <td v-if="hasIndex" class="bg-[#FAFAFA] w-16 rounded-l-lg">
                  {{ index + 1 }}
                </td>
                <td
                  v-for="(columnHeader, index) in columnHeaders"
                  :class="`bg-[#FAFAFA] py-4 last:rounded-r-lg ${hasIndex && 'first:rounded-l-lg'}`"
                  :key="index"
                >
                  {{ row.getTextFor(columnHeader.key) }}
                </td>
              </tr>
            </slot>
          </template>
        </template>
      </tbody>
      <tfoot
        class="text-center w-full p-4"
        v-if="!rows.length"
        data-test="no-data"
      >
        Nothing to display
      </tfoot>
    </table>
    <div
      v-if="isLoading"
      class="w-full border flex items-center justify-center p-4"
    >
      <SpinnerLoader class="h-12 w-12" />
    </div>
    <div class="flex justify-between items-center">
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
import type { PropType } from "vue";
import type { DataGridRow, DataGridColumnHeader } from "@/core/type";
import SpinnerLoader from "@/components/SpinnerLoader.vue";

const props = defineProps({
  columnHeaders: {
    type: Array as PropType<DataGridColumnHeader[]>,
    required: true,
  },
  rows: {
    type: Array as PropType<DataGridRow[]>,
    required: true,
  },
  hasTotal: {
    type: Boolean,
    default: true,
  },
  totalElementTitle: {
    type: String,
    default: "Total",
  },
  hasHeadersFixed: {
    type: Boolean,
    default: true,
  },
  hasPagination: {
    type: Boolean,
    default: true,
  },
  isLoading: {
    type: Boolean,
  },
  hasIndex: {
    type: Boolean,
  },
  shouldSelect: {
    type: Boolean,
    default: true,
  },
});
</script>
