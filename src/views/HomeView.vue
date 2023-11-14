<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>

<template>
  <div class="max-w-2xl w-[92%] text-white mx-auto pb-14 sm:mt-[5%] mt-[8%]">

    <h1 class="text-center sm:text-4xl mt-4 text-2xl font-bold">
      Hello, I'm Nebojsha. <br>I'm a full-stack web developer.
    </h1>

    <p class="mt-4 sm:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, ex ac
      euismod cursus, mauris libero.
    </p>

    <p class="mt-4 sm:text-lg">
      Suspendisse potenti. Quisque in libero eu magna suscipit ullamcorper.
      Sed non ligula vel dolor blandit commodo. Proin vel sapien vel velit sollicitudin consequat.
      Integer tristique urna ut erat suscipit, a gravida orci laoreet.
    </p>

    <div class="text-center">
      <div class="inline-block transition duration-100 hover:scale-105 my-8">
        <RouterLink
            to="/projects"
            class="
          border border-zinc-700 hover:border-sky-500 select-none border-[2px] sm:px-16 px-10 sm:py-3 py-2
          text-lg rounded-lg font-semibold"
        >
          See Projects <font-awesome-icon class="ml-2 mb-[-1px]" :icon="['fas', 'arrow-right']" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
