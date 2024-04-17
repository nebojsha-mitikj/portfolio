<script setup lang="ts">
import { onBeforeMount, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProjectService from '@/services/ProjectService';
import MyImage from "@/components/assets/MyImage.vue";

let project: any = null;

const projectTitle = computed((): string => {
  let project: string|string[] = useRoute().params.project;
  if (typeof project === 'string') {
    return project;
  }
  return '';
})

onBeforeMount(() => {
  project = ProjectService.get(projectTitle.value.replace('-', ' '));
  if (project == null) {
    useRouter().push('/projects');
  }
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="max-w-2xl w-[92%] text-white mx-auto pb-14 sm:mt-[5%] mt-[8%]" v-if="project != null">
    <h1 class="text-center sm:text-4xl mt-4 text-2xl font-bold">
      {{ project.title }}
    </h1>
    <p class="mt-4 sm:text-lg">
      {{ project.description }}
    </p>

    <my-image :src="project.image" :alt="'Header image'"></my-image>

    <h2 class="sm:text-4xl text-2xl font-bold">Description:</h2>
    <p class="mt-4 sm:text-lg" v-text="project.long"></p>

    <h2 class="sm:text-4xl text-2xl font-bold mt-4">Built with:</h2>
    <p class="mt-4 sm:text-lg" v-text="project.built"></p>

    <div class="text-center">
      <div class="inline-block transition duration-100 hover:scale-105 my-8">
        <a
            :href="project.site"
            target="_blank"
            class="
          border-2 border-zinc-600 hover:border-sky-500 select-none sm:px-16 px-10 sm:py-3 py-2
          text-lg rounded-lg font-semibold"
        >
          Visit Site <font-awesome-icon class="ml-2 mb-[-1px]" :icon="['fas', 'arrow-right']" />
        </a>
      </div>
    </div>

  </div>
</template>