<script setup lang="ts">
import Hero from "./components/Hero.vue";
import AboutMe from "./components/AboutMe.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import { ToastifyContainer } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';
</script>

<template>
  <NavBar />
  <Hero />
  <AboutMe />
  <Experience />
  <Skills />
  <Contact />
  <Footer />
  <ToastifyContainer />
</template>
