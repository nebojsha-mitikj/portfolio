<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>

<template>
  <div class="max-w-xl w-[92%] text-white mx-auto pb-14 sm:mt-[5%] mt-[8%]">
      <h1 class="text-center sm:text-4xl mt-4 text-2xl font-bold">
        Hello, I'm Nebojsha. <br>I'm a passionate web developer, based in Ohrid, Macedonia.
      </h1>
      <p class="mt-4 sm:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio id libero consectetur
        fringilla. Quisque sollicitudin justo non tincidunt feugiat. Sed ut augue at justo consectetur
        scelerisque. Proin sed urna quis lectus vestibulum eleifend.
      </p>
      <p class="mt-4 sm:text-lg">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aenean scelerisque nisl ut tortor varius, id fringilla orci eleifend. Fusce ultricies elit nec
        sapien convallis, at tempor velit condimentum.
      </p>
      <div class="text-center mt-6 hover:scale-110 transition duration-200">
        <RouterLink
            to="/experience"
            class="py-2 select-none px-4 sm:text-xl text-lg rounded-2xl text-white bg-sky-600 hover:bg-sky-700"
        >
          Next 👉
        </RouterLink>
      </div>
  </div>
</template>
