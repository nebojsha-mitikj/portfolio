<script setup lang="ts">
import {RouterView} from 'vue-router'
import Navbar from "@/components/navbar/Navbar.vue";
</script>

<template>
  <div class="w-full h-full absolute">
    <navbar></navbar>
    <RouterView/>
  </div>
</template>
