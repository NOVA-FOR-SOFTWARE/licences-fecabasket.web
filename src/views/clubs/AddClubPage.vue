<template>
  <dialog id="addClubModal" class="modal w-full">
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
            <h1 class="text-4xl font-semibold">Créer un nouveau club</h1>
            <p class="text-gray-500 my-4">
              Créez un nouveau profil de club pour personnaliser votre expérience.
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
              </ul>
            </div>
          </div>
          <div
            class="w-3/5 pl-8 flex-col max-h-[75dvh] overflow-hidden flex justify-start"
          >
            <Transition>
              <div v-show="currentState === 0" class="w-full">
                <h2 class="font-semibold text-xl">Informations du club</h2>
                <div class="grid mt-12 w-full grid-cols-2 gap-4 overflow-hidden">
                  <TextInput
                    v-model="club.name"
                    placeholder="Nom"
                    theme="bg-[#F5F5F5]"
                    :errors="v1$.name?.$errors"
                  />
                  <TextInput
                    v-model="club.logo"
                    placeholder="Logo"
                    theme="bg-[#F5F5F5]"
                    :errors="v1$.logo?.$errors"
                  />
                  <TextInput
                    v-model="club.leaderName"
                    placeholder="Nom du dirigeant"
                    theme="bg-[#F5F5F5]"
                    :errors="v1$.leaderName?.$errors"
                  />
                  <TextInput
                    v-model="club.creationDate"
                    placeholder="Date de création"
                    theme="bg-[#F5F5F5]"
                    :errors="v1$.creationDate?.$errors"
                  />
                  <TextInput
                    v-model="club.email"
                    placeholder="Email"
                    theme="bg-[#F5F5F5]"
                    :errors="v1$.email?.$errors"
                  />
                  <TextInput
                    v-model="club.locality"
                    placeholder="Localité"
                    theme="bg-[#F5F5F5]"
                    :errors="v1$.locality?.$errors"
                  />
                </div>
              </div>
            </Transition>
            <Transition>
              <div v-show="currentState === 1">
                <h2 class="font-semibold text-xl">Informations supplémentaires</h2>
                <div class="grid mt-12 w-full grid-rows-2 gap-4 grid-flow-col">
                  <TextInput
                    v-model="club.phoneNumber"
                    placeholder="Numéro de téléphone"
                    theme="bg-[#F5F5F5]"
                    :errors="v2$.phoneNumber?.$errors"
                    type="number"
                  />
                  <TextInput
                    v-model="club.coach"
                    placeholder="Entraîneur"
                    theme="bg-[#F5F5F5]"
                    :errors="v2$.coach?.$errors"
                  />
                  <TextInput
                    v-model="club.folder"
                    placeholder="Dossier"
                    theme="bg-[#F5F5F5]"
                    :errors="v2$.folder?.$errors"
                  />
                  <TextInput
                    v-model="club.achievements"
                    placeholder="Réalisations"
                    theme="bg-[#F5F5F5]"
                    :errors="v2$.achievements?.$errors"
                  />
                  <TextInput
                    v-model="club.jerseyColors"
                    placeholder="Couleurs du maillot"
                    theme="bg-[#F5F5F5]"
                    :errors="v2$.jerseyColors?.$errors"
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
                :disabled="false"
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

<script setup lang="ts">
import TextInput from "@/components/forms/TextInput.vue";
import { computed, reactive, ref } from "vue";
import CheckIcon from "@/components/icons/Checkicon.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, email, numeric } from "@vuelidate/validators";
import { nullClubEntity, type Club } from "@services/clubs/entities/Club.entity";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import { ClubResources } from "@services/clubs/ClubResources";

const emit = defineEmits<{
  close: [];
  created: [];
}>();

const currentState = ref<number>(0);
const isLoading = ref<boolean>(false);

const club = reactive<Club>(nullClubEntity());

const requiredTextField = {
  required: helpers.withMessage("Veuille remplir ce champs", required),
};
const requiredNumberField = {
  required: helpers.withMessage("Veuille remplir ce champs", required),
  numeric: helpers.withMessage("Veillez entrez uniquement des chiffres", numeric),
};

const firstStepRules = computed(() => ({
  name: requiredTextField,
  logo: requiredTextField,
  leaderName: requiredTextField,
  creationDate: requiredTextField,
  email: {
    ...requiredTextField,
    email: helpers.withMessage("Cet email n'est pas valide", email),
  },
  locality: requiredTextField,
}));

const secondStepRules = computed(() => ({
  phoneNumber: requiredNumberField,
  coach: requiredTextField,
  folder: requiredTextField,
  achievements: requiredTextField,
  jerseyColors: requiredTextField,
}));

const v1$ = useVuelidate(firstStepRules, club, { $stopPropagation: true });
const v2$ = useVuelidate(secondStepRules, club, { $stopPropagation: true });

const validateForm = async () => await [v1$, v2$][currentState.value].value.$validate();

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
  try {
    isLoading.value = true;
    if (!(await validateForm())) return;
    const clubToSave = nullClubEntity();
    Object.assign(clubToSave, club);
    const clubId = await ClubResources.create(clubToSave);
    emit("created");
  } catch (error: unknown) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const emptyForm = () => Object.assign(club, nullClubEntity());
</script>
