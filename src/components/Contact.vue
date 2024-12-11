<script setup lang="ts">
import { ref } from "vue";
import {toast} from "vue3-toastify";

const name = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");
const isLoading = ref(false);

const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const validateForm = () => {
  if (isLoading.value) return false;

  if (!name.value || !email.value || !message.value){
    toast.error('Por favor verificar que todos los campos estén completos');
    return false;
  }
  if (!validateEmail(email.value)) {
    toast.error('El formato del email ingresado es incorrecto');
    return false;
  }
  return true;
}

async function submitForm(event: Event) {
  event.preventDefault();
  if (!validateForm()) return;

  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("message", message.value);

  try {
    isLoading.value = true;
    const response = await fetch(`https://formsubmit.co/ajax/${import.meta.env.VITE_EMAIL_ID}`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      toast.success("Mensaje enviado exitosamente.");
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      toast.error("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    }
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    toast.error("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div class="flex flex-col bg-gray-100 py-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48" id="contact">
    <p class="text-gray-900 text-3xl md:text-4xl font-bold text-center mb-12">Contacto</p>
    <div class="flex flex-col gap-6 mx-auto px-4 sm:px-8 md:px-16 lg:mx-60">
      <input
          type="text"
          placeholder="Nombre y apellido"
          class="input input-bordered w-full bg-white"
          v-model="name"
      />
      <input
          type="email"
          placeholder="Email"
          class="input input-bordered w-full bg-white"
          v-model="email"
      />
      <textarea
          placeholder="Mensaje"
          class="textarea textarea-bordered w-full bg-white resize-none"
          rows="4"
          v-model="message">
      </textarea>
      <button
          class="btn btn-primary text-gray-50 w-full"
          @click.prevent="submitForm">
        <span v-if="!isLoading">Enviar</span>
        <span v-else class="loading loading-spinner loading-md"></span>
      </button>
    </div>
  </div>
</template>
