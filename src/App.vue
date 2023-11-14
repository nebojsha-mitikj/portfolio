<script setup lang="ts">
import {RouterView} from 'vue-router'
import Navbar from "@/components/navbar/Navbar.vue";
import MyFooter from "@/components/footer/MyFooter.vue";
</script>

<template>
  <div>
    <navbar></navbar>
    <RouterView/>
    <div class="h-16"></div>
    <my-footer class="absolute bottom-0"></my-footer>
  </div>
</template>
