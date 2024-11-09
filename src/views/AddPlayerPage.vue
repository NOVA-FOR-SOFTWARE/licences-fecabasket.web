<template>
  <dialog id="addPlayerModal" class="modal w-full">
    <div class="modal-box bg-[#FAFAFA]  w-[11/12] max-w-6xl overflow-hidden">
      <div class="bg-[#FAFAFA] flex items-center h-[80dvh] px-4">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost rounded-full bg-yellow-400 mt-2 mr-2 absolute right-2 top-2">✕</button>
        </form>
        <div class="w-full flex justify-center gap-4 divide-x rounded-xl p-6">
          <div class="w-2/5 flex flex-col justify-center">
            <h1 class="text-4xl font-semibold">Créer une nouveau demande licence</h1>
            <p class="text-gray-500 my-4">
              Créez un nouveau profil joueur pour personnaliser votre expérience de jeu et suivre vos
              aventures.
            </p>
            <div class="w-1/2">
              <ul class="steps steps-horizontal">
                <li class="step setp-[#000000]"></li>
                <li class="step step-info"></li>
                <li class="step"></li>
              </ul>
            </div>
          </div>
          <div class="w-3/5 pl-8">
            <h2 class="font-semibold text-xl">Informations personnelles</h2>
            <div class="grid mt-12 w-full grid-rows-5 gap-4 grid-flow-col ">
              <TextInput v-model="player.lastname" placeholder="Nom" theme="bg-[#F5F5F5]" />
              <TextInput v-model="player.firstname" placeholder="prenom" theme="bg-[#F5F5F5]" />
              <TextInput v-model="player.dateOfBirth" placeholder="Date de naissance" theme="bg-[#F5F5F5]" />
              <TextInput v-model="player.placeOfBirth" placeholder="Lieux de Naissance" theme="bg-[#F5F5F5]" />
              <TextInput v-model="player.placeOfResidence" placeholder="Lieux de Residence" theme="bg-[#F5F5F5]" />
              <TextInput v-model="player.email" placeholder="Adresse Email" theme="bg-[#F5F5F5]" />
              <TextInput v-model="player.phoneNumber" placeholder="Numero de telephone" theme="bg-[#F5F5F5]" />
              <FileInput class="row-span-3" className="h-44 bg-[#F5F5F5]" :preview="true"
                placeholder="Seelectioner une image" v-model="player.picture" />
            </div>
            <div class="flex justify-end mt-12">
              <button class="btn w-1/2 border-none text-white hover:bg-green-400 bg-green-500"> <span>Continuer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script setup lang="ts">
import FileInput from '@/components/forms/FileInput.vue';
import TextInput from '@/components/forms/TextInput.vue';
import { reactive } from 'vue';

const player = reactive({
  firstname: "",
  lastname: "",
  dateOfBirth: "",
  placeOfBirth: "",
  placeOfResidence: "",
  email: "",
  phoneNumber: "",
  picture: "",
})
</script>