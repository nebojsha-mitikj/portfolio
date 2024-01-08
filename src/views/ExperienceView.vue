<script setup lang="ts">
import MyBadge from "@/components/assets/MyBadge.vue";
</script>

<template>
  <div class="max-w-2xl w-[92%] text-white mx-auto pb-14 sm:mt-[5%] mt-[8%]">

    <h1 class="text-center sm:text-4xl mt-4 text-2xl font-bold">
      Skills & Experience.
    </h1>

    <div class="grid grid-cols-12 gap-y-4">
      <div class="col-span-12">
        <h1 class="sm:text-2xl mt-4 text-xl font-bold">
          I'm skilled in
        </h1>
        <!--
        <div class="text-left">
          <MyBadge>🐘 PHP</MyBadge>
          <MyBadge>🚀 Laravel</MyBadge>
          <MyBadge>🧑‍💻 JavaScript</MyBadge>
          <MyBadge>🔧 Vue.js</MyBadge>
          <MyBadge>📄 HTML</MyBadge>
          <MyBadge>🎨 CSS</MyBadge>
          <MyBadge>📐 Tailwind</MyBadge>
          <MyBadge>🅱️ Bootstrap</MyBadge>
          <MyBadge>🐍 Python</MyBadge>
          <MyBadge>📅 SQL</MyBadge>
          <MyBadge>📅 MongoDB</MyBadge>
          <MyBadge>🌥️ AWS</MyBadge>
        </div>
        -->
        <div class="text-left">
          <MyBadge>PHP</MyBadge>
          <MyBadge>Laravel</MyBadge>
          <MyBadge>JavaScript</MyBadge>
          <MyBadge>Vue.js</MyBadge>
          <MyBadge>HTML</MyBadge>
          <MyBadge>CSS</MyBadge>
          <MyBadge>Tailwind</MyBadge>
          <MyBadge>Bootstrap</MyBadge>
          <MyBadge>Python</MyBadge>
          <MyBadge>SQL</MyBadge>
          <MyBadge>MongoDB</MyBadge>
          <MyBadge>AWS</MyBadge>
          <MyBadge>Docker</MyBadge>
          <MyBadge>Linux</MyBadge>
        </div>
      </div>
      <div class="col-span-12">
        <h1 class="sm:text-2xl mt-4 text-xl font-bold">
          Experience
        </h1>

        <p class="mt-4 sm:text-lg">
          Curabitur fermentum elit ut massa varius, eu venenatis nunc vestibulum. Donec ultrices
          accumsan massa, id lacinia odio fringilla vel.
        </p>

        <p class="mt-4 sm:text-lg">
          Nullam fringilla, ex ac euismod cursus, mauris libero fermentum lectus, ut congue orci eros
          eu justo. Sed ac elit id nulla fermentum tincidunt. Suspendisse
          potenti. Quisque in libero eu magna suscipit ullamcorper. Sed non ligula vel dolor blandit
          commodo vel sapien vel velit.
        </p>

        <p class="mt-4 sm:text-lg">
          Curabitur fermentum elit ut massa varius, eu venenatis nunc vestibulum. Donec ultrices accumsan
          massa, id lacinia odio fringilla vel. Integer vel sagittis erat vestibulum.
        </p>
      </div>

    </div>

  </div>
</template>