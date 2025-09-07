<script setup lang="ts">
import ExperienceCard from "./ExperienceCard.vue";
import { onMounted, ref } from "vue";
import { Experience } from "../types/experience.ts";

const experiences = ref<Experience[]>([]);

onMounted(() => {
  experiences.value = [
    {
      title: "Software Developer",
      bulletPoints: [
        "Diseño e implementación de servicios backend junto a un equipo de desarrollo usando Kotlin, Go y TypeScript.",
        "Implementación de arquitecturas serverless en AWS, con Lambda, DynamoDB, DocumentDB, Kinesis, SQS y SNS.",
        "Integración de microservicios mediante patrones event-driven y colas distribuidas.",
        "Modelado de esquemas e índices en DynamoDB y DocumentDB para soportar diferentes patrones de acceso.",
        "Desarrollo de pruebas unitarias y de integración en microservicios para validar funcionalidad y cobertura de código.",
      ],
      startDate: "Junio 2025",
      endDate: "Presente",
      company: "itti",
      technologies: ["Kotlin", "Go", "Typescript", "Node.js", "Amazon Web Services (AWS)", "AWS Lambda", "Amazon Simple Notification Service (SNS)", "Amazon Simple Queue Service (SQS)", "Amazon Kinesis", "Amazon DynamoDB", "Amazon DocumentDB"]
    },
    {
      title: "Backend Developer",
      bulletPoints: [
        "Liderado del equipo de backend en el diseño, optimización y mantenimiento de microservicios, impulsando nuevas funcionalidades para mejorar el rendimiento y la fiabilidad de la plataforma.",
        "Desarrollo de microservicios backend con un enfoque en escalabilidad y eficiencia, utilizando TypeScript, Go y Rust.",
        "Implementación de patrones de diseño distribuidos, como Saga, utilizando RabbitMQ para garantizar la fiabilidad en la comunicación entre microservicios y evitar fallos en las transacciones.",
        "Uso de gRPC para optimizar la comunicación entre servicios, disminuyendo el consumo de ancho de banda y mejorando el rendimiento.",
        "Diseño y administración de bases de datos SQL y NoSQL (PostgreSQL, MongoDB, Redis) para almacenamiento eficiente y escalable.",
        "Automatización de tareas operativas y procesos de despliegue mediante scripts de Shell.",
        "Implementación de pruebas unitarias y de integración exhaustivas en microservicios, alcanzando más del 90% de cobertura de código.",
        "Desarrollo de frontend con Vue.js, Pinia y TailwindCSS."
      ],
      startDate: "Septiembre 2023",
      endDate: "Junio 2025",
      company: "Legendaryum",
      technologies: ["TypeScript", "Node.js", "Express.js", "Go", "Gin", "Rust", "PostgreSQL", "MongoDB", "Redis", "Vue", "TailwindCSS"]
    },
    {
      title: "Backend Developer",
      bulletPoints: [
        "Desarrollo y mantenimiento de APIs RESTful con Node.js, Express, TypeScript y TypeORM.",
        "Gestión y optimización de bases de datos en MySQL, asegurando integridad y eficiencia en las consultas.",
        "Despliegue y administración de APIs mediante servicios de infraestructura gestionada.",
        "Desarrollo junto con el equipo de frontend en la integración de los servicios con Vue.js, Pinia y TailwindCSS."
      ],
      startDate: "Septiembre 2022",
      endDate: "Septiembre 2023",
      company: "Consultora Pablo Barón",
      technologies: ["TypeScript", "Node.js", "Express.js", "MySQL", "Vue", "TailwindCSS"]
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
            :bullet-points="experience.bulletPoints"
            :start-date="experience.startDate"
            :end-date="experience.endDate"
            :company="experience.company"
            :technologies="experience.technologies"
        />
      </div>
    </div>
  </div>
</template>
