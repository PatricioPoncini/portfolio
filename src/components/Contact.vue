<script setup lang="ts">
import {onMounted, ref} from "vue";
import {toast} from "vue3-toastify";

const name = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");
const isLoading = ref(false);
const captchaToken = ref<string>("");
declare const hcaptcha: any;

declare global {
  interface Window {
    onCaptchaVerified: ((token: string) => void) | undefined;
    onCaptchaExpired: (() => void) | undefined;
  }
}

onMounted(() => {
  window.onCaptchaVerified = (token: string) => {
    captchaToken.value = token;
  };

  window.onCaptchaExpired = () => {
    captchaToken.value = "";
  };

  const script = document.createElement("script");
  script.src = "https://js.hcaptcha.com/1/api.js";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  return () => {
    window.onCaptchaVerified = undefined;
    window.onCaptchaExpired = undefined;
  };
});

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

  if (!captchaToken.value) {
    toast.error('Por favor complete el captcha');
    return false;
  }

  return true;
}

const onCaptchaVerified = (token: string) => {
  captchaToken.value = token;
}

const onCaptchaExpired = () => {
  captchaToken.value = "";
}

async function submitForm(event: Event) {
  event.preventDefault();
  if (!validateForm()) return;

  try {
    isLoading.value = true;
    const response = await fetch(`https://api.web3forms.com/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_EMAIL_ID,
        name: name.value,
        email: email.value,
        message: message.value,
        captcha_token: captchaToken.value,
        "h-captcha-response": captchaToken.value,
      }),
    });

    if (response.ok) {
      toast.success("Mensaje enviado exitosamente.");
      name.value = "";
      email.value = "";
      message.value = "";
      captchaToken.value = "";
      hcaptcha.reset();
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
    <form class="flex flex-col gap-6 mx-auto px-4 sm:px-8 md:px-16 lg:mx-60" @submit.prevent="submitForm">
      <input
          name="name"
          type="text"
          placeholder="Nombre y apellido"
          class="input input-bordered w-full bg-white"
          v-model="name"
      />
      <input
          name="email"
          type="email"
          placeholder="Email"
          class="input input-bordered w-full bg-white"
          v-model="email"
      />
      <textarea
          name="message"
          placeholder="Mensaje"
          class="textarea textarea-bordered w-full bg-white resize-none text-[16px]"
          rows="4"
          v-model="message">
      </textarea>
      <div class="flex justify-center items-center">
        <div
            class="h-captcha"
            data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            data-callback="onCaptchaVerified"
            data-expired-callback="onCaptchaExpired"
        ></div>
      </div>
      <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
      <button
          class="btn btn-primary text-gray-50 w-full"
          @click.prevent="submitForm">
        <span v-if="!isLoading">Enviar</span>
        <span v-else class="loading loading-spinner loading-md"></span>
      </button>
    </form>
  </div>
</template>
