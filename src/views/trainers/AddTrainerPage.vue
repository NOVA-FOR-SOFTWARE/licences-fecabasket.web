<template>
  <dialog id="addTrainerModal" class="modal w-full">
    <div class="modal-box bg-[#FAFAFA] w-[11/12] max-w-6xl overflow-hidden">
      <div class="bg-[#FAFAFA] flex items-center h-[80dvh] px-4">
        <form method="dialog">
          <button
            @click="emptyForm"
            class="btn btn-sm btn-circle btn-ghost rounded-full bg-yellow-400 mt-2 mr-2 absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div class="w-full flex justify-center gap-4 divide-x rounded-xl p-6">
          <div class="w-2/5 flex flex-col justify-center">
            <h1 class="text-4xl font-semibold">
              Créer une nouveau demande licence
            </h1>
            <p class="text-gray-500 my-4">
              Créez un nouveau profil joueur pour personnaliser votre expérience
              de jeu et suivre vos aventures.
            </p>
            <div class="w-1/2">
              <ul class="steps gap-4 py-2 steps-horizontal">
                <li
                  @click="currentState = 0"
                  :class="`flex cursor-pointer justify-center items-center w-12 h-12  border rounded-full ${currentState >= 0 ? 'bg-green-500 text-white' : ' bg-gray-100'}`"
                >
                  <CheckIcon v-if="currentState > 0" />
                  <span v-else>1</span>
                </li>
                <li
                  @click="currentState = 1"
                  :class="`flex cursor-pointer justify-center items-center w-12 h-12  border rounded-full ${currentState >= 1 ? 'bg-green-500 text-white' : ' bg-gray-100'}`"
                >
                  <CheckIcon v-if="currentState > 1" />
                  <span v-else>2</span>
                </li>
                <li
                  @click="currentState = 2"
                  :class="`flex cursor-pointer justify-center items-center w-12 h-12  border rounded-full ${currentState >= 2 ? 'bg-green-500 text-white' : ' bg-gray-100'}`"
                >
                  <CheckIcon v-if="currentState > 2" />
                  <span v-else>3</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="w-3/5 pl-8 flex-col max-h-[75dvh] overflow-hidden flex justify-start"
          >
            <Transition>
              <div v-show="currentState === 0" class="w-full">
                <h2 class="font-semibold text-xl">Informations personnelles</h2>
                <div
                  class="grid mt-12 w-full grid-cols-2 gap-4 overflow-hidden"
                >
                  <FileInput
                    class="row-span-3"
                    className="h-44 bg-[#F5F5F5]"
                    :preview="true"
                    placeholder="Selectioner une image"
                    v-model="trainer.picture"
                    :errors="v1$.picture.$errors"
                  />
                  <TextInput
                    v-model="trainer.lastname"
                    placeholder="Nom"
                    theme="bg-[#F5F5F5]"
                    :errors="v1$.lastname?.$errors"
                  />
                  <TextInput
                    v-model="trainer.firstname"
                    placeholder="Prenom"
                    theme="bg-[#F5F5F5]"
                    :errors="v1$.firstname?.$errors"
                  />
                  <TextInput
                    v-model.number.trim="trainer.phoneNumber"
                    placeholder="Numero de telephone"
                    theme="bg-[#F5F5F5]"
                    :errors="v1$.phoneNumber?.$errors"
                    type="number"
                  />
                  <TextInput
                    v-model="trainer.birthDate"
                    placeholder="Date de naissance"
                    theme="bg-[#F5F5F5]"
                    type="date"
                    :errors="v1$.birthDate?.$errors"
                  />
                  <TextInput
                    v-model="trainer.birthPlace"
                    placeholder="Lieux de Naissance"
                    theme="bg-[#F5F5F5]"
                    :errors="v1$.birthPlace?.$errors"
                  />
                  <TextInput
                    v-model="trainer.residence"
                    placeholder="Lieux de Residence"
                    theme="bg-[#F5F5F5]"
                    :errors="v1$.residence?.$errors"
                  />
                  <TextInput
                    v-model="trainer.email"
                    placeholder="Adresse Email"
                    theme="bg-[#F5F5F5]"
                    :errors="v1$.email?.$errors"
                    type="email"
                  />
                </div>
              </div>
            </Transition>
            <Transition>
              <div v-show="currentState === 1">
                <h2 class="font-semibold text-xl">Informations sportives</h2>
                <div class="grid mt-12 w-full grid-rows-2 gap-4 grid-flow-col">
                  <SelectInput
                    selectClass="select-ghost bg-[#F5F5F5]"
                    class="pl-4 justify-center"
                    :model-value="trainer.club"
                    placeholder="Club"
                    :options="clubs"
                    :errors="v2$.club?.$errors"
                  />
                  <TextInput
                    v-model="trainer.bibNumber"
                    placeholder="Dossard"
                    theme="bg-[#F5F5F5]"
                    type="number"
                    :errors="v2$.bibNumber?.$errors"
                  />
                  <TextInput
                    v-model="trainer.folder"
                    placeholder="Dossier"
                    theme="bg-[#F5F5F5]"
                    :errors="v2$.folder?.$errors"
                  />
                  <TextInput
                    v-model="trainer.trophies"
                    placeholder="Palmarès"
                    theme="bg-[#F5F5F5]"
                    :errors="v2$.trophies?.$errors"
                  />
                </div>
              </div>
            </Transition>
            <div class="flex justify-end mt-12 gap-5">
              <SpinnerLoader class="w-2 h-2" />
              <button
                v-if="currentState > 0"
                @click="currentState--"
                class="button flex border bg-gray-200 rounded-lg w-1/2 justify-center items-center h-12 space-x-2"
              >
                <span class="">Back</span>
              </button>
              <button
                :disabled="
                  false /*currentStepHasAtLeastOneFieldErrors!v$.$silentErrors?.length*/
                "
                @click="onSubmit"
                class="btn w-1/2 border-none text-white disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-green-400 bg-green-500"
              >
                <span>
                  {{
                    !isLoading
                      ? currentState < 1
                        ? "Continuer"
                        : "Terminer"
                      : "Enregistrement..."
                  }}
                </span>
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
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: 0.3s ease;
  transform: translate(0%, 10%);
  opacity: 0;
}

.v-enter-from,
.v-leave-to {
  transform: translate(0%, 10%);
  opacity: 0;
}
</style>
<script setup lang="ts">
import FileInput from "@/components/forms/FileInput.vue";
import TextInput from "@/components/forms/TextInput.vue";
import { computed, reactive, ref } from "vue";
import SelectInput from "@/components/forms/SelectInput.vue";
import CheckIcon from "@/components/icons/Checkicon.vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  helpers,
  email,
  numeric,
  minLength,
  maxLength,
} from "@vuelidate/validators";
import {
  nullPlayerEntity,
  type Player,
} from "@services/user/entities/Player.entity";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import { PlayerResources } from "@services/user/PlayerResources";

const emit = defineEmits<{
  close: [];
  created: [];
}>();

const clubs = [
  {
    value: "DoualaFi",
    label: "fi",
  },
];

const currentState = ref<number>(0);
const isLoading = ref<boolean>(false);

const trainer = reactive<Player>({
  firstname: "",
  lastname: "",
  birthDate: "",
  birthPlace: "",
  residence: "",
  email: "",
  phoneNumber: "",
  picture: null,
  club: "",
  folder: "",
  trophies: "",
});
const requiredTextField = {
  required: helpers.withMessage("Veuille remplir ce champs", required),
};
const requiredNumberField = {
  required: helpers.withMessage("Veuille remplir ce champs", required),
  numeric: helpers.withMessage(
    "Veillez entrez uniquement des chiffres",
    numeric,
  ),
};
const firstStepRules = computed(() => ({
  firstname: requiredTextField,
  lastname: requiredTextField,
  birthDate: requiredTextField,
  birthPlace: requiredTextField,
  residence: requiredTextField,
  email: {
    ...requiredTextField,
    email: helpers.withMessage("Cet email n'est pas valide", email),
  },
  phoneNumber: {
    ...requiredNumberField,
    length: helpers.withMessage(
      "Un numero de telephone c'est 9 chiffres",
      minLength(9) || maxLength(9),
    ),
  },
  picture: requiredTextField,
}));
const secondStepRules = computed(() => ({
  club: requiredNumberField,
  bibNumber: requiredTextField,
  folder: requiredTextField,
  trophies: requiredTextField,
}));
const v1$ = useVuelidate(firstStepRules, trainer, {
  $stopPropagation: true,
});
const v2$ = useVuelidate(secondStepRules, trainer, {
  $stopPropagation: true,
});

const currentStepHasAtLeastOneFieldErrors = computed<boolean>(
  () => !![v1$, v2$][currentState.value].value.$errors.length,
);
const validateForm = async () =>
  await [v1$, v2$][currentState.value].value.$validate();

const goToNextStep = async () => {
  if (!(await validateForm())) return;
  if (currentState.value >= 1) return;
  currentState.value++;
};

const onSubmit = async () => {
  if (currentState.value < 1) {
    await goToNextStep();
    return;
  }

  isLoading.value = true;
  if (!(await validateForm())) return;
  const trainerToSave = nullPlayerEntity();
  console.log(trainerToSave);
  const trainerId = await PlayerResources.create(trainerToSave);
  console.log(trainerId);
  emit("created");
  try {
  } catch (error: unknown) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const emptyForm = () => Object.assign(trainer, nullPlayerEntity());
</script>

