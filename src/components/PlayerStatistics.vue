<template>
  <div class="grid grid-cols-4 gap-4">
    <StatisticsCard v-for=" statistic in statistics" :key="statistic.label" :label="statistic.label"
      :sublabel="statistic.sublabel" :value="`${statistic.value}`">
      <template #icon>
        <component :is="statistic.icon" class="mr-1" />
      </template>
      <template #background>
        <component :is="statistic.background" class="w-16 h-16" />
      </template>
    </StatisticsCard>
  </div>
</template>
<script setup lang="ts">
import StatisticsCard from './StatisticsCard.vue';
import BallIcon from './icons/BallIcon.vue';
import CardIcon from './CardIcon.vue';
import WomenIcon from './icons/statistics/WomenIcon.vue';
import MenIcon from './icons/statistics/MenIcon.vue';
import PendingIcon from './icons/statistics/PendingIcon.vue';
import DoneIcon from './icons/statistics/DoneIcon.vue';

const statistics = [
  {
    label: "Nombre de licencier Féminin",
    sublabel: "Fecabasket",
    value: 1309,
    icon: WomenIcon,
    background: BallIcon,
  },
  {
    label: "Nombre de licencier Masculin",
    sublabel: "Fecabasket",
    value: 124,
    icon: MenIcon,
    background: BallIcon,
  },
  {
    label: "Nombre de licencies En attente",
    sublabel: "Fecabasket",
    value: 1023,
    icon: PendingIcon,
    background: CardIcon,
  },
  {
    label: "Nombre de licencies Accepter",
    sublabel: "Fecabasket",
    value: 35,
    icon: DoneIcon,
    background: CardIcon,
  },
]
</script>