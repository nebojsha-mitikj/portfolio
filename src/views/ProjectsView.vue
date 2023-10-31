<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { useProjects } from './../assets/composables/projects.js';

  const { projects } = useProjects();
</script>

<template>
  <div class="max-w-4xl w-[92%] text-white mx-auto pb-14 sm:mt-[5%] mt-[8%]">

    <div class="max-w-xl mx-auto">
      <h1 class="text-center sm:text-4xl mt-4 text-2xl font-bold">
        See what I've built.
      </h1>

      <p class="mt-4 text-left sm:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio id libero consectetur
        fringilla. Quisque sollicitudin justo non tincidunt feugiat. Sed ut augue at justo consectetur
        scelerisque. Proin sed urna quis lectus vestibulum eleifend.
      </p>
    </div>

    <div class="grid grid-cols-12 gap-x-4 sm:gap-y-16 sm:pt-12 pt-6 text-left">
      <template  v-for="(project, index) in projects" :key="project.title">
        <div class="
          transform sm:hover:scale-110 hover:scale-100 transition duration-200
          sm:col-span-6 col-span-12 flex items-center sm:mt-0
        " :class="{'mt-16': index !== 0, 'mt-4': index === 0}">
          <RouterLink :to="'projects/'+project.title.toLowerCase()" class="w-full">
            <img :src="project.image" alt="todo" class="rounded cursor-pointer sm:w-[90%] w-[100%] mx-auto">
          </RouterLink>
        </div>
        <div class="sm:col-span-6 col-span-12 flex flex-col justify-center">
          <div>
            <RouterLink :to="'projects/'+project.title.toLowerCase()">
              <h2 class="text-2xl inline-block font-semibold cursor-pointer hover:underline sm:mt-0 mt-4">{{ project.title }}</h2>
            </RouterLink>
          </div>

          <p class="sm:text-lg">{{ project.description }}</p>

          <div>
            <RouterLink :to="'projects/'+project.title.replace(/\s+/g, '-').toLowerCase()" class="py-2 mt-2 inline-block select-none text-lg px-4 rounded-2xl text-white bg-sky-600 hover:bg-sky-700">
              See more 👉
            </RouterLink>
          </div>
        </div>
      </template>
    </div>

  </div>
</template>