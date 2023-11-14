<script setup lang="ts">
const classes = 'transform hover:scale-125 transition duration-200 mx-4 cursor-pointer';
</script>

<template>
  <div class="block w-full text-white text-center text-3xl mb-4">
    <a href="mailto:nebojsha.97.mitikj@gmail.com">
      <font-awesome-icon :class="classes" :icon="['fas', 'envelope']"></font-awesome-icon>
    </a>
    <a href="https://github.com/nebojsha-mitikj" target="_blank">
      <font-awesome-icon :class="classes" :icon="['fab', 'github']"></font-awesome-icon>
    </a>
    <a href="https://www.linkedin.com/in/nebojsha-mitikj-15ab75150/" target="_blank">
      <font-awesome-icon :class="classes" :icon="['fab', 'linkedin']"></font-awesome-icon>
    </a>
  </div>
</template>