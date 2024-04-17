<script setup lang="ts">

import MyBadge from '@/components/assets/MyBadge.vue';
import ExperienceService from '@/services/ExperienceService';

const monthsDiff = (d1: Date, d2: Date): number => {
  let monthsDiff = (d2.getFullYear() - d1.getFullYear()) * 12 + d2.getMonth() - d1.getMonth();
  if (d2.getDate() > d1.getDate()) ++monthsDiff;
  return monthsDiff;
}

const timeString = (d1: Date) => {
  return `${new Intl.DateTimeFormat('en', { month: 'short' }).format(d1)} ${d1.getFullYear()}`;
}

const totalTimeString = (d1: Date, d2: Date): string => {
  let monthsCount = monthsDiff(d1, d2);
  let totalYears = Math.floor(monthsCount / 12);
  let leftMoths = monthsCount % 12;
  return (totalYears > 0 ? totalYears + ' yrs ' : '') + (leftMoths > 0 ? leftMoths + ' mos ' : '');
}

const timeDifference = (start: string, end: string | null): string => {
  let d1 = new Date(start);
  let d2 = new Date(end ? end : new Date().toISOString().slice(0, 10));
  return `${timeString(d1)} - ${end == null ? 'Present' : timeString(d2)} · ${totalTimeString(d1, d2)}`
}

</script>

<template>
  <div class="max-w-2xl w-[92%] text-white mx-auto pb-14 sm:mt-[5%] mt-[8%]">

    <h1 class="text-center sm:text-4xl mt-4 text-2xl font-bold">
      Skills & Experience.
    </h1>
    <div class="grid grid-cols-12 gap-y-4">
      <div class="col-span-12">
        <h1 class="sm:text-2xl mt-4 text-xl font-bold">
          I'm skilled in
        </h1>
        <div class="text-left">
          <MyBadge>PHP</MyBadge>
          <MyBadge>Laravel</MyBadge>
          <MyBadge>JavaScript</MyBadge>
          <MyBadge>Vue.js</MyBadge>
          <MyBadge>HTML</MyBadge>
          <MyBadge>CSS</MyBadge>
          <MyBadge>Tailwind</MyBadge>
          <MyBadge>Bootstrap</MyBadge>
          <MyBadge>Python</MyBadge>
          <MyBadge>SQL</MyBadge>
          <MyBadge>MongoDB</MyBadge>
          <MyBadge>AWS</MyBadge>
          <MyBadge>Docker</MyBadge>
          <MyBadge>Linux</MyBadge>
        </div>
      </div>
      <div class="col-span-12">
        <h1 class="sm:text-2xl mt-4 text-xl font-bold">
          Experience
        </h1>

        <div class="mt-8">
          <div class="grid grid-cols-12 gap-y-2 gap-x-5 sm:gap-y-10">
            <template v-for="(data, index) in ExperienceService.get()" :key="data.company">
              <div class="col-span-12 sm:col-span-2" :class="{'mt-10 sm:mt-0': index === ExperienceService.length() - 1}">
                <img :src="data.image" class="w-full max-w-[6rem] mx-auto" :alt="data.alt">
              </div>
              <div class="col-span-12 sm:col-span-10 text-center sm:text-left">
                <p class="font-semibold">{{ data.title}}</p>
                <p class="text-gray-200">{{ data.company }}</p>
                <p class="text-gray-400">{{  timeDifference(data.start, data.end) }}</p>
                <p class="text-gray-400">{{ data.location }}</p>
                <p class="text-gray-200 mt-2 max-w-sm sm:max-w-full mx-auto"><span class="font-semibold">Skills:</span> {{ data.skills }} </p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>