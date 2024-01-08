<script setup lang='ts'>

  import { RouterLink } from 'vue-router';
  import { ref } from 'vue';

  const navItem = 'block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 md:hover:text-sky-500 font-semibold';

  const navbarDefault = ref(null);

  const pages = ref([
    {name: 'home', path: '/'},
    {name: 'experience', path: '/experience'},
    {name: 'projects', path: '/projects'},
    {name: 'contact', path: '/contact'},
  ])

  const firstCharToUpperCase = (str) : string => {
    return str[0].toUpperCase() + str.slice(1)
  }

  async function toggleNavbar() : void {
    const navbar: HTMLElement = navbarDefault.value;
    const isHidden: boolean = navbarDefault.value.classList.contains('hidden');
    isHidden ? navbar.classList.remove('hidden') : navbar.classList.add('hidden');
  }

  const collapseNavbar = () : void => {
    const navbar: HTMLElement = navbarDefault.value;
    navbar.classList.add('hidden');
  }

</script>

<template>
  <nav class="select-none">
    <div class="max-w-4xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/" class="flex items-center">

        <span class="self-center text-2xl whitespace-nowrap text-white font-semibold">
           Nebojsha
        </span>
      </RouterLink>
      <button @click="toggleNavbar" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-zinc-400 hover:bg-zinc-700 focus:ring-zinc-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default" ref="navbarDefault">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-zinc-900 md:bg-zinc-900 border-zinc-700">
          <li v-for="page in pages" :key="page.name">
            <RouterLink @click="collapseNavbar" :to="page.path" :class="{
              'text-sky-500': $route.name === page.name || page.name === 'projects' && $route.name === 'project',
              'text-white': $route.name !== page.name && !(page.name === 'projects' && $route.name === 'project'),
              [navItem]: true
            }">
              {{ firstCharToUpperCase(page.name) }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>