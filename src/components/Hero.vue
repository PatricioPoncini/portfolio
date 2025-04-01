<script setup lang="ts">
import {onMounted, ref} from "vue";

const cvPublicUrl = ref("");
onMounted(() => {
  cvPublicUrl.value = import.meta.env.VITE_CV_PUBLIC_URL
})
</script>

<template>
  <div class="grid grid-cols-1 bg-indigo-600 min-h-screen">
    <div class="flex flex-col items-center justify-center gap-8 px-6 py-10">
      <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight">
        ¡Hola, soy Patricio Poncini!
      </h1>
      <h2 class="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
        Desarrollador Backend
      </h2>
      <div class="flex flex-col text-center sm:flex-row gap-4">
        <a
            href="#contact"
            class="rounded-full text-lg font-medium bg-white hover:bg-gray-200 text-indigo-600 px-8 py-3 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Contáctame
        </a>
        <a
            target="_blank"
            :href="cvPublicUrl"
            class="rounded-full text-center text-lg font-medium bg-white hover:bg-gray-200 text-indigo-600 px-8 py-3 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Descargar CV
        </a>
      </div>
      <div class="flex items-center justify-center gap-6">
        <a
            href="https://www.linkedin.com/in/patricio-poncini/"
            target="_blank"
            aria-label="LinkedIn"
            class="group"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              class="fill-white group-hover:fill-gray-300 transition duration-300"
          >
            <path
                d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.2.79 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.5c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm15.11 12.95h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.56v6.18z"
            />
          </svg>
        </a>
        <a
            href="https://github.com/PatricioPoncini"
            target="_blank"
            aria-label="GitHub"
            class="group"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              class="fill-white group-hover:fill-gray-300 transition duration-300"
          >
            <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.387.6.111.793-.26.793-.577v-2.243c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.666-.304-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.267 1.984-.4 3.006-.404 1.021.004 2.049.137 3.006.404 2.291-1.552 3.298-1.23 3.298-1.23.653 1.653.241 2.873.118 3.176.768.84 1.233 1.911 1.233 3.221 0 4.609-2.805 5.624-5.479 5.921.43.37.813 1.1.813 2.219v3.293c0 .32.192.694.8.576C20.566 21.796 24 17.296 24 12 24 5.37 18.63 0 12 0z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
