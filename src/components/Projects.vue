<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import { ref } from "vue";
import { Project } from "../types/experience.ts";

const projects = ref<Project[]>([
  {
    title: "Fetchy",
    description: "Herramienta de diagnóstico del sistema, escrita en Go, enfocada en el rendimiento.",
    url: "https://github.com/PatricioPoncini/fetchy"
  },
  {
    title: "Server Side Events",
    description: "Mini proyecto que demuestra SSE con un servidor Go para streaming de datos en tiempo real.",
    url: "https://github.com/PatricioPoncini/server-side-events"
  },
  {
    title: "Rusty Notes",
    description: "Backend minimalista para gestión de notas, desarrollado en Rust.",
    url: "https://github.com/PatricioPoncini/rusty-notes"
  },
  {
    title: "Alfred",
    description: "Bot de Telegram para notificaciones de recordatorios, desarrollado en Go.",
    url: "https://github.com/PatricioPoncini/remind-me"
  }
]);
</script>

<template>
  <div class="flex flex-col bg-gray-100 gap-10 py-16 px-8" id="projects">
    <p class="text-gray-900 text-3xl md:text-4xl font-bold text-center">Proyectos</p>
    <div class="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
      <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :url="project.url"
      />
    </div>
  </div>
</template>
