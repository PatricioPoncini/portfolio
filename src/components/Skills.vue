<script setup lang="ts">
import { onMounted, ref } from "vue";

const skills = ref<string[]>([]);

onMounted(() => {
  skills.value = ["Typescript", "Node.js", "Express.js", "Go", "Gin", "PostgreSQL", "MongoDB", "Redis", "Docker", "Vue3", "TailwindCSS", "HTML", "CSS"];
});
</script>

<template>
  <div class="grid grid-cols-1 bg-gray-50 h-96" id="skills">
    <div class="flex flex-col items-center justify-center gap-8 px-4 py-8">
      <p class="text-gray-900 text-3xl sm:text-4xl md:text-4xl font-bold text-center">
        Skills
      </p>
      <div class="flex flex-wrap gap-4 justify-center mx-10">
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