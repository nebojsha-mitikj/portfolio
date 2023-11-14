<script setup lang="ts">
import {onBeforeMount, computed} from 'vue'
import { useRoute, useRouter } from 'vue-router'
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

    <div class="text-center">
      <div class="inline-block transition duration-100 hover:scale-105 my-8">
        <a
            :href="project.site"
            target="_blank"
            class="
          border border-zinc-700 hover:border-sky-500 select-none sm:px-16 px-10 sm:py-3 py-2
          text-lg rounded-lg font-semibold"
        >
          Visit Site <font-awesome-icon class="ml-2 mb-[-1px]" :icon="['fas', 'arrow-right']" />
        </a>
      </div>
    </div>

  </div>
</template>