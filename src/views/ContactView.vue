<script setup lang="ts">
import {KinesisContainer, KinesisElement} from 'vue-kinesis';
</script>

<template>
  <kinesis-container class="sm:px-0 px-4 text-white max-w-xl mx-auto mb-14 mt-[4%]">
    <h1 class="text-center sm:text-4xl mt-4 text-2xl">
      Contact me
    </h1>
    <p class="mt-4 sm:text-lg">
      If you’d like to chat about a project or just have question, please
      fill in the form below. I aim to get back within 2 days. Software for an advertising agency,
      a start-up, a student-led design studio, and a huge.
    </p>

    <div class="grid grid-cols-12 gap-x-2 gap-y-2 mt-4 text-sm">
      <div class="col-span-6">
        <label for="email" class="mb-1 block text-white">
          Name
        </label>
        <input
            type="text"
            id="email" class="border rounded-lg w-full bg-zinc-800
              border-zinc-600 text-white focus:ring-emerald-500 focus:border-emerald-500">
      </div>
      <div class="col-span-6">
        <label class="mb-1 block text-white">
          Email
        </label>
        <input
            type="email"
            class="border rounded-lg w-full bg-zinc-800
              border-zinc-600 text-white focus:ring-emerald-500 focus:border-emerald-500">
      </div>
      <div class="col-span-12">
        <label for="subject" class="mb-1 block text-white">
          Subject
        </label>
        <input
            type="text"
            class="border rounded-lg w-full bg-zinc-800
              border-zinc-600 text-white focus:ring-emerald-500 focus:border-emerald-500">
      </div>

      <div class="col-span-12">
        <label for="subject" class="mb-1 block text-white">
          Message
        </label>
        <textarea rows="8"
                  class="resize-none w-full rounded-lg border bg-zinc-800 border-zinc-600 placeholder-zinc-400 text-white focus:ring-emerald-500 focus:border-emerald-500"></textarea>
      </div>
    </div>

    <div class="text-center mt-5">
      <kinesis-element class="text-2xl" :strength="5">
        <button class="py-2 px-4 text-xl rounded-2xl text-white bg-emerald-600 hover:bg-emerald-700">
          Send Message
        </button>
      </kinesis-element>
    </div>

  </kinesis-container>
</template>