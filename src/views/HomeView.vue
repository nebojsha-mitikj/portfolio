<script setup lang="ts">
  import { KinesisContainer, KinesisElement} from 'vue-kinesis';
</script>

<template>
  <kinesis-container class="flex justify-center text-center items-center text-4xl text-white" style="height: 70vh">
    <div>

      <kinesis-element :strength="15">
        <img class="border-[14px] border-emerald-500 mx-auto rounded-full w-48 h-48" src="src/assets/images/me.jpg" alt="Me">
      </kinesis-element>
      <kinesis-element :strength="17">
        Hi, I'm Nebojsha 👋
      </kinesis-element>
      <kinesis-element :strength="19">
        I'm a full-stack web developer
      </kinesis-element>
    </div>
  </kinesis-container>
</template>
