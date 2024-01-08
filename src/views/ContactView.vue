<template>
  <div class="max-w-2xl w-[92%] text-white mx-auto pb-14 sm:mt-[5%] mt-[8%]">
    <h1 class="text-center sm:text-4xl mt-4 text-2xl font-bold">
      Get in touch.
    </h1>
    <p class="mt-4 sm:text-lg">
      If you're interested in chatting about a project or if you have any questions,
      just drop me a message. I'll do my best to get back to you
      within 24 hours. Looking forward to connecting!
    </p>

    <div class="grid grid-cols-12 gap-2 mt-4">
      <div class="sm:col-span-6 col-span-12">
        <label for="name" class="mb-1 block text-white">
          Your name
        </label>
        <input
            id="name"
            type="text"
            autocomplete="on"
            class="border rounded-lg w-full bg-zinc-900
              border-zinc-600 text-white focus:ring-sky-500 focus:border-sky-500">
      </div>
      <div class="sm:col-span-6 col-span-12">
        <label for="email" class="mb-1 block text-white">
          Your email
        </label>
        <input
            id="email"
            type="email"
            autocomplete="on"
            class="border rounded-lg w-full bg-zinc-900
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
            class="border rounded-lg w-full bg-zinc-900
              border-zinc-600 text-white focus:ring-sky-500 focus:border-sky-500">
      </div>

      <div class="col-span-12">
        <label for="message" class="mb-1 block text-white">
          Your message
        </label>
        <textarea id="message" rows="6" class="resize-none w-full rounded-lg border border-zinc-600 bg-zinc-900 text-white focus:ring-sky-500 focus:border-sky-500"></textarea>
      </div>
    </div>

    <div class="text-center">
      <div class="inline-block my-5">
        <button
            class="
          border-[2px] border-zinc-600 hover:border-sky-500 select-none sm:px-16 px-10 sm:py-3 py-2
          text-lg rounded-lg font-semibold"
        >
          Send Message <font-awesome-icon class="ml-2 mb-[-1px]" :icon="['fas', 'arrow-right']" />
        </button>
      </div>
    </div>

  </div>
</template>