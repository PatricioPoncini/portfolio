<script setup lang="ts">
import { onMounted, ref } from "vue";

const skills = ref<string[]>([]);

onMounted(() => {
  skills.value = ["Typescript", "Node.js", "Express.js", "Hono", "Go", "Gin", "Rust", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "Vue3", "TailwindCSS"];
});
</script>

<template>
  <div class="bg-gray-50 py-8" id="skills">
    <div class="container mx-auto px-4">
      <p class="text-gray-900 text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-8">
        Skills
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <div
            v-for="skill in skills"
            :key="skill"
            class="bg-[#e3e4fb] text-[#4f46e5] font-semibold px-4 py-2 rounded-full"
        >
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>