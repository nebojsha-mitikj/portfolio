<script setup lang="ts">

</script>

<template>
  <div class="max-w-xl w-[92%] text-white mx-auto pb-14 sm:mt-[5%] mt-[8%]">
    <h1 class="text-center sm:text-4xl mt-4 text-2xl font-bold">
      Send me a message.
    </h1>
    <p class="mt-4 sm:text-lg">
      If you'd like to discuss a project or have any questions, please complete the form below.
      I strive to respond within 24 hours.
    </p>

    <div class="grid grid-cols-12 gap-x-2 gap-y-2 mt-4 text-sm">
      <div class="col-span-6">
        <label for="name" class="mb-1 block text-white">
          Name
        </label>
        <input
            id="name"
            type="text"
            autocomplete="on"
            class="border rounded-lg w-full bg-zinc-800
              border-zinc-600 text-white focus:ring-sky-500 focus:border-sky-500">
      </div>
      <div class="col-span-6">
        <label for="email" class="mb-1 block text-white">
          Email
        </label>
        <input
            id="email"
            type="email"
            autocomplete="on"
            class="border rounded-lg w-full bg-zinc-800
              border-zinc-600 text-white focus:ring-sky-500 focus:border-sky-500">
      </div>
      <div class="col-span-12">
        <label for="subject" class="mb-1 block text-white">
          Subject
        </label>
        <input
            id="subject"
            type="text"
            autocomplete="off"
            class="border rounded-lg w-full bg-zinc-800
              border-zinc-600 text-white focus:ring-sky-500 focus:border-sky-500">
      </div>

      <div class="col-span-12">
        <label for="message" class="mb-1 block text-white">
          Message
        </label>
        <textarea id="message" rows="8" class="resize-none w-full rounded-lg border bg-zinc-800 border-zinc-600 placeholder-zinc-400 text-white focus:ring-sky-500 focus:border-sky-500"></textarea>
      </div>
    </div>

    <div class="text-center mt-5 hover:scale-110 transition duration-200">
        <button class="py-2 select-none px-4 text-2xl text-xl rounded-2xl text-white bg-sky-600 hover:bg-sky-700">
          Send message
        </button>
    </div>

  </div>
</template>