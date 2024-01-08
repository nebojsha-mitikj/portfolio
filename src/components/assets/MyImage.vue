<script setup lang="ts">

import {ref} from "vue";

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  scale: {
    type: Number,
    default: 1.5
  },
  alt: {
    type: String,
    default: ''
  }
});

const img = ref();

const onZoom = (e: any) : void => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;
  img.value.style.transformOrigin = `${x}px ${y}px`;
  img.value.style.transform = "scale("+props.scale+")";
}

const offZoom = () : void => {
  img.value.style.transformOrigin = `center center`;
  img.value.style.transform = "scale(1)";
}

</script>

<template>
  <div id="container" class="rounded my-8 mx-auto"
       @mousemove="onZoom"
       @mouseover="onZoom"
       @mouseleave="offZoom"
       @mouseup="offZoom"
       @mousedown="offZoom"
  >
    <img ref="img"  class="my-image" :src="src" :alt="alt"/>
  </div>
</template>

<style scoped>
  #container {
    overflow: hidden;
  }
  .my-image {
    transform-origin: center center;
    object-fit: cover;
    height: 100%;
    width: 100%;
    cursor: zoom-in;
  }
</style>