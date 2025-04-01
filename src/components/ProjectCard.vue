<script setup lang="ts">
import { Project } from "../types/experience.ts";

const { title, description, url } = defineProps<Project>();
</script>

<template>
  <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
    <a>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {{ title }}
      </h5>
    </a>
    <p class="mb-3 font-normal text-gray-700">{{ description }}</p>
    <a
        :href="url"
        target="_blank"
        aria-label="GitHub"
        class="inline-block"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="40"
          height="40"
          class="fill-purple-700 hover:fill-purple-600 transition duration-300"
      >
        <path
            d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.387.6.111.793-.26.793-.577v-2.243c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.666-.304-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.267 1.984-.4 3.006-.404 1.021.004 2.049.137 3.006.404 2.291-1.552 3.298-1.23 3.298-1.23.653 1.653.241 2.873.118 3.176.768.84 1.233 1.911 1.233 3.221 0 4.609-2.805 5.624-5.479 5.921.43.37.813 1.1.813 2.219v3.293c0 .32.192.694.8.576C20.566 21.796 24 17.296 24 12 24 5.37 18.63 0 12 0z"
        />
      </svg>
    </a>
  </div>
</template>
