<script setup lang="ts">
import { Experience } from "../types/experience.ts";

const { title, startDate, endDate, company, bulletPoints, technologies } = defineProps<Experience>();
</script>

<template>
  <div class="flex flex-col w-full max-w-7xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
    <p class="text-gray-900 font-bold text-3xl mb-2">{{ title }}</p>
    <p class="text-blue-600 font-semibold text-xl mb-3">{{ company }}</p>
    <div class="flex italic items-center text-gray-700 font-semibold text-lg mb-4">
      <p>{{ startDate }}</p>
      <span class="mx-2">-</span>
      <p>{{ endDate }}</p>
    </div>
    <ul v-if="bulletPoints.length > 0" class="list-disc pl-6 mb-4 space-y-2">
      <li v-for="(point, index) in bulletPoints" :key="index" class="text-gray-600 text-lg leading-relaxed">
        {{ point }}
      </li>
    </ul>
    <div class="flex flex-wrap gap-2 mt-6">
      <div v-for="tech in technologies" :key="tech" class="bg-[#e3e4fb] text-[#4f46e5] font-semibold px-4 py-2 rounded-full">
        {{ tech }}
      </div>
    </div>
  </div>
</template>

