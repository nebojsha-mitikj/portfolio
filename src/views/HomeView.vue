<script setup lang="ts">
import {KinesisContainer, KinesisElement} from 'vue-kinesis';
import {RouterLink} from 'vue-router';
</script>

<template>
  <kinesis-container class="sm:px-0 px-4 text-white max-w-xl mx-auto mb-14 mt-[4%]">
    <img alt="Profile picture" src="src/assets/images/me.jpg" class="sm:w-32 w-24 mx-auto rounded">
    <h1 class="text-center sm:text-4xl mt-4 text-2xl">
      Welcome! I'm Nebojsha. <br> Full-stack web developer, based in Ohrid, Macedonia.
    </h1>
    <p class="mt-4 sm:text-lg">
      Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first
      into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the
      privilege of building software for an advertising agency, a start-up, a student-led design
      studio, and a huge corporation.
    </p>
    <p class="mt-4 sm:text-lg">
      My main focus these days is building products and leading projects for our clients at Upstatement.
      In my free time I've also released an online video course that covers everything you need to
      know to build a web app with the Spotify API.
    </p>
    <kinesis-element class="text-2xl text-center mt-6" :strength="5">
      <RouterLink
          to="/experience"
          class="py-2 px-4 text-xl rounded-2xl text-white bg-emerald-600 hover:bg-emerald-700"
      >
        Next 👉
      </RouterLink>
    </kinesis-element>
  </kinesis-container>
</template>
