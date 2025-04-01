<script setup lang="ts">
import { ref } from 'vue';

const isDropdownVisible = ref(false);

const toggleDropdown = (event: Event) => {
  event.stopPropagation();
  isDropdownVisible.value = !isDropdownVisible.value;
};

const hideDropdown = () => {
  isDropdownVisible.value = false;
};
</script>

<template>
  <div class="navbar bg-[#4338ca] text-gray-50">
    <div class="flex-1">
      <a href="#" class="btn btn-ghost normal-case text-2xl font-bold">Patricio Poncini</a>
    </div>

    <div class="flex-none">
      <details class="dropdown dropdown-end lg:hidden" @click="toggleDropdown">
        <summary class="btn btn-ghost lg:hidden cursor-pointer p-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </summary>

        <ul
            v-show="isDropdownVisible"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#4338ca] rounded-box w-52 text-lg font-semibold"
            @click="hideDropdown"
        >
          <li><a href="#aboutMe">Sobre mí</a></li>
          <li><a href="#experiences">Experiencia</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </details>

      <ul class="menu menu-horizontal hidden lg:flex px-1 text-lg font-semibold">
        <li><a href="#aboutMe">Sobre mí</a></li>
        <li><a href="#experiences">Experiencia</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </div>
  </div>
</template>
