<template>
  <dialog id="addOfficialModal" class="modal w-full">
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
            <h1 class="text-4xl font-semibold">Ajouter un nouvel officiel</h1>
            <p class="text-gray-500 my-4">
              Créez un nouveau profil d'officiel pour personnaliser votre expérience.
            </p>
          </div>
          <div
            class="w-3/5 pl-8 flex-col max-h-[75dvh] overflow-hidden flex justify-start"
          >
            <h2 class="font-semibold text-xl">Informations de l'officiel</h2>
            <div class="grid mt-12 w-full grid-cols-2 gap-4 overflow-hidden">
              <TextInput
                v-model="official.fullName"
                placeholder="Nom complet"
                theme="bg-[#F5F5F5]"
                :errors="v$.fullName?.$errors"
              />
              <TextInput
                v-model="official.birthDate"
                placeholder="Date de naissance"
                theme="bg-[#F5F5F5]"
                :errors="v$.birthDate?.$errors"
                type="date"
              />
              <TextInput
                v-model="official.birthPlace"
                placeholder="Lieu de naissance"
                theme="bg-[#F5F5F5]"
                :errors="v$.birthPlace?.$errors"
              />
              <TextInput
                v-model="official.residence"
                placeholder="Résidence"
                theme="bg-[#F5F5F5]"
                :errors="v$.residence?.$errors"
              />
              <TextInput
                v-model="official.phoneNumber"
                placeholder="Numéro de téléphone"
                theme="bg-[#F5F5F5]"
                :errors="v$.phoneNumber?.$errors"
                type="number"
              />
              <TextInput
                v-model="official.email"
                placeholder="Email"
                theme="bg-[#F5F5F5]"
                :errors="v$.email?.$errors"
                type="email"
              />
              <TextInput
                v-model="official.profilePicture"
                placeholder="Photo de profil"
                theme="bg-[#F5F5F5]"
                :errors="v$.profilePicture?.$errors"
              />
              <TextInput
                v-model="official.grade"
                placeholder="Grade"
                theme="bg-[#F5F5F5]"
                :errors="v$.grade?.$errors"
              />
            </div>
            <div class="flex justify-end mt-12 gap-5">
              <SpinnerLoader class="w-2 h-2" />
              <button
                :disabled="isLoading"
                @click="onSubmit"
                class="btn w-1/2 border-none text-white disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-green-400 bg-green-500"
              >
                <span>
                  {{ !isLoading ? "Ajouter" : "Enregistrement..." }}
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
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, email, numeric } from "@vuelidate/validators";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import { OfficialResources } from "@services/official/OfficialResources";
import { nullOfficialEntity, type Official } from "@services/official/entities/Official.entity";

const emit = defineEmits<{
  close: [];
  created: [];
}>();

const isLoading = ref<boolean>(false);

const official = reactive<Official>({
  fullName: "",
  birthDate: "",
  birthPlace: "",
  residence: "",
  phoneNumber: "",
  email: "",
  profilePicture: "",
  grade: "",
});

const requiredTextField = {
  required: helpers.withMessage("Veuillez remplir ce champ", required),
};
const requiredNumberField = {
  required: helpers.withMessage("Veuillez remplir ce champ", required),
  numeric: helpers.withMessage("Veuillez entrer uniquement des chiffres", numeric),
};

const rules = computed(() => ({
  fullName: requiredTextField,
  birthDate: requiredTextField,
  birthPlace: requiredTextField,
  residence: requiredTextField,
  phoneNumber: requiredNumberField,
  email: {
    ...requiredTextField,
    email: helpers.withMessage("Cet email n'est pas valide", email),
  },
  profilePicture: requiredTextField,
  grade: requiredTextField,
}));

const v$ = useVuelidate(rules, official, { $stopPropagation: true });

const validateForm = async () => await v$.value.$validate();

const onSubmit = async () => {
  if (!(await validateForm())) return;
  try {
    isLoading.value = true;
    const officialToSave = nullOfficialEntity();
    Object.assign(officialToSave, official);
    await OfficialResources.create(officialToSave);
    emit("created");
  } catch (error: unknown) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const emptyForm = () => Object.assign(official, nullOfficialEntity());
</script>
