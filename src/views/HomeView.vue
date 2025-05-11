<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>

<template>
  <div class="max-w-2xl w-[92%] text-white mx-auto pb-14 sm:mt-[3%] mt-[8%]">

    <img src="/images/me/nebojsha.jpg" alt="Image of Nebojsha" class="w-60 h-60 object-cover rounded-full mx-auto">

    <h1 class="text-center sm:text-4xl mt-4 text-2xl font-bold">
      Hi, I'm Nebojsha. <br>I'm a full-stack <span class="text-sky-500">web developer</span>.
    </h1>

    <p class="mt-4 sm:text-lg">
      Hello👋 I'm a full-stack web developer based in Ohrid, Macedonia, with over six years of experience transforming
      ideas into clean, efficient, and scalable code. I specialize in PHP, Python, and JavaScript, and I'm passionate about building modern web applications using frameworks like Laravel and Vue.js. Let's team up on
      exciting projects - explore my work.
    </p>

    <div class="text-center">
      <div class="inline-block my-8">
        <RouterLink
            to="/projects"
            class="
          border border-zinc-600 hover:border-sky-500 select-none border-[2px] sm:px-16 px-10 sm:py-3 py-2
          text-lg rounded-lg font-semibold bg-zinc-900"
        >
          See Projects <font-awesome-icon class="ml-2 mb-[-1px]" :icon="['fas', 'arrow-right']" />
        </RouterLink>
        <RouterLink to="/experience">
          <p class="mt-6 select-none text-sm cursor-pointer underline">See skills and experience</p>
        </RouterLink>
      </div>


    </div>
  </div>
</template>
