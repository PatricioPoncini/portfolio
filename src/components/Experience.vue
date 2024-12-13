<script setup lang="ts">
import ExperienceCard from "./ExperienceCard.vue";
import { onMounted, ref } from "vue";
import { Experience } from "../types/experience.ts";

const experiences = ref<Experience[]>([]);

onMounted(() => {
  experiences.value = [
    {
      title: "Desarrollador Full Stack",
      mainDescription: "Actualmente desempeño el rol de desarrollador full stack trabajando junto a mi equipo para mantener y desarrollar microservicios, así como en la creación del frontend, tanto para las vistas principales como para las interfaces internas de gestión.",
      secondDescription: "Desde que comencé adquirí conocimientos sólidos en patrones de diseño como Saga para la coordinación y optimización de servicios distribuidos, mejorando la eficiencia y resiliencia de las soluciones implementadas.  También exploré el uso de encolamiento de mensajes, la implementación de llamadas gRPC, y la integración de bases de datos tanto SQL como NoSQL, lo que amplió mi comprensión de arquitecturas modernas. Además, perfeccioné mis habilidades técnicas en los lenguajes de programación utilizados, elevando la calidad y el rendimiento del código.",
      startDate: "Sept. 2023",
      endDate: "Presente",
      company: "Legendaryum",
      technologies: ["TypeScript", "Node.js", "Express.js", "Go", "Gin", "Rust", "PostgreSQL", "MongoDB", "Redis", "Vue", "HTML", "CSS", "TailwindCSS"]
    },
    {
      title: "Desarrollador Full Stack",
      mainDescription: "Durante mi tiempo en esta empresa, desempeñé el rol de desarrollador full stack, donde tuve mi primer acercamiento al mundo laboral. Junto con el equipo de trabajo, desarrollamos un proyecto completo desde sus inicios, lo que me permitió aprender significativamente sobre backend y frontend.",
      secondDescription: "Mi principal objetivo fue diseñar e implementar un sistema robusto y escalable para una oficina virtual, enfocado en digitalizar y simplificar la gestión de trámites. Gracias a este proyecto, eliminamos la necesidad de atención presencial, logrando que el proceso fuera completamente virtual, eficiente y fácil de usar.",
      startDate: "Sept. 2022",
      endDate: "Sept. 2023",
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
            :main-description="experience.mainDescription"
            :second-description="experience.secondDescription"
            :start-date="experience.startDate"
            :end-date="experience.endDate"
            :company="experience.company"
            :technologies="experience.technologies"
        />
      </div>
    </div>
  </div>
</template>
