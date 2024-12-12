<script setup lang="ts">
import ExperienceCard from "./ExperienceCard.vue";
import { onMounted, ref } from "vue";
import { Experience } from "../types/experience.ts";

const experiences = ref<Experience[]>([]);

onMounted(() => {
  experiences.value = [
    {
      title: "Desarrollador Full Stack",
      description: "Actualmente desempeño el rol de desarrollador full stack trabajando junto a mi equipo para mantener y desarrollar microservicios, así como en la creación del frontend, tanto para las vistas principales como para el panel de administrador. Durante este tiempo, he adquirido conocimientos en patrones de diseño como Saga para la coordinación de microservicios, lo que ha mejorado la eficiencia y la resiliencia de las soluciones implementadas. ",
      startDate: "Septiembre 2023",
      endDate: "Presente",
      company: "Legendaryum",
      technologies: ["TypeScript", "Node.js", "Express.js", "Go", "Gin", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Desarrollador Full Stack",
      description: "Durante mi tiempo en esta empresa me desempeñé como desarrollador full stack, creando un sistema robusto y escalable para una oficina virtual. Mi principal objetivo fue digitalizar y simplificar la gestión de trámites, eliminando la necesidad de atención presencial y logrando que el proceso sea completamente virtual y fácil de usar. Además, contribuí al desarrollo del frontend, diseñando y optimizando las vistas tanto de la página principal como del panel administrativo, asegurando una experiencia de usuario intuitiva y eficiente en ambas interfaces.",
      startDate: "Septiembre 2022",
      endDate: "Septiembre 2023",
      company: "Consultora Pablo Barón",
      technologies: ["TypeScript", "Node.js", "Express.js", "MySQL", "Vue", "HTML", "CSS", "TailwindCSS"]
    },
  ] satisfies Experience[];
});
</script>

<template>
  <div class="flex flex-col bg-gray-100 gap-10 py-16 px-8" id="experiences">
    <p class="text-gray-900 text-4xl font-bold text-center">Experiencia</p>
    <div class="flex flex-col gap-8 max-w-7xl mx-auto">
      <div v-for="experience in experiences" :key="experience.title">
        <ExperienceCard
            :title="experience.title"
            :description="experience.description"
            :start-date="experience.startDate"
            :end-date="experience.endDate"
            :company="experience.company"
            :technologies="experience.technologies"
        />
      </div>
    </div>
  </div>
</template>
