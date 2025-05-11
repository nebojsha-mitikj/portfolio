<script setup lang="ts">
import {ref, computed, onMounted, onBeforeUnmount} from 'vue';
import {RouterView} from 'vue-router';
import Navbar from "@/components/navbar/Navbar.vue";
import MyFooter from "@/components/footer/MyFooter.vue";

const boxSize = 120;
const columns = ref(0);
const rows = ref<number>(0);
const hoveredIndex = ref<number | null>(null);

const totalBoxes = computed(() => columns.value * rows.value);

const calculateGrid = (): void => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  columns.value = Math.ceil(width / boxSize) + 1;
  rows.value = Math.ceil(height / boxSize) + 8;
}

const handleMouseMove = (e: MouseEvent): void => {
  const col = Math.floor(e.pageX / boxSize);
  const row = Math.floor(e.pageY / boxSize);
  const index = row * columns.value + col;
  if (index >= 0 && index < totalBoxes.value) {
    hoveredIndex.value = index;
  } else {
    hoveredIndex.value = null;
  }
}

onMounted(() => {
  calculateGrid();
  window.addEventListener('resize', calculateGrid);
  window.addEventListener('mousemove', handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateGrid);
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div class="grid" :style="{gridTemplateColumns: `repeat(${columns}, 120px)`, gridAutoRows: '120px'}">
        <div
            v-for="n in totalBoxes" :key="n"
            class="border-r-2 border-b-2 hover-effect"
            :class="{ hovered: hoveredIndex === n - 1 }"
        ></div>
      </div>
    </div>
    <div class="relative z-10 flex-1 flex flex-col">
      <navbar/>
      <RouterView/>
      <div class="h-16"></div>
      <my-footer class="absolute bottom-0"/>
    </div>
  </div>
</template>

<style scoped>
.hover-effect {
  transition: background 0.5s ease;
  border-color: rgba(255, 255, 255, 0.03);
}

.hovered {
  background: rgba(255, 255, 255, 0.01);
  transition: background 0s ease;
}
</style>
