<script setup lang="ts">
import {onBeforeMount, computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import { useProjects } from './../assets/composables/projects.js';

const { getProject } = useProjects();
let project = null;

const projectTitle = computed((): string => {
  return useRoute().params.project;
})

onBeforeMount(() => {
  project = getProject(projectTitle.value.replace('-', ' '));
  if (project == null) {
    useRouter().push('/projects');
  }
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="max-w-xl w-[92%] text-white mx-auto pb-14 sm:mt-[5%] mt-[8%]" v-if="project != null">
    <h1 class="text-center sm:text-4xl mt-4 text-2xl font-bold">
      {{ project.title }}
    </h1>
    <p class="mt-4 sm:text-lg">
      {{ project.description }}
    </p>
    <img :src="project.image" alt="todo" class="rounded w-[100%] my-8 mx-auto">

    <h2 class="sm:text-4xl text-2xl font-bold">First header</h2>
    <p class="mt-4 sm:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio id libero consectetur
      fringilla. Quisque sollicitudin justo non tincidunt feugiat. Sed ut augue at justo consectetur
      scelerisque. Proin sed urna quis lectus vestibulum eleifend.
    </p>
    <h2 class="sm:text-4xl text-2xl font-bold mt-4">Second header</h2>
    <p class="mt-4 sm:text-lg">
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    </p>
    <p class="mt-4 sm:text-lg">
      Aenean scelerisque nisl ut tortor varius, id fringilla orci eleifend. Fusce ultricies elit nec.
    </p>

    <div class="text-center mt-6 hover:scale-110 transition duration-200">
      <a
          :href="project.site"
          target="_blank"
          class="py-2 select-none px-4 sm:text-xl text-lg rounded-2xl text-white bg-sky-600 hover:bg-sky-700"
      >
        Visit site 👉
      </a>
    </div>

  </div>
</template>