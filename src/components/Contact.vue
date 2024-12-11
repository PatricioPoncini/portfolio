<script setup lang="ts">
import { ref } from "vue";

const name = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");

async function submitForm(event: Event) {
  event.preventDefault();

  if (!name.value || !email.value || !message.value) {
    // TODO: Vue icon con la validación
    // TODO: Validar que el email sea válido
    return;
  }

  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("message", message.value);

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${import.meta.env.VITE_EMAIL_ID}`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // TODO: Vue toasts
      alert("Mensaje enviado exitosamente.");
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    }
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
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
        Enviar mensaje
      </button>
    </div>
  </div>
</template>
