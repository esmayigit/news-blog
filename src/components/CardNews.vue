<template>
  <router-link :to="{ path: '/news/' + news.id }" class="hover:cursor-pointer">
    <div class="w-full">
      <img
        :src="news.image_url"
        alt=""
        class="w-full h-24 sm:h-32 lg:h-44 xl:h-56 2xl:h-80 rounded-lg mb-4"
      />
      <h3 class="font-bold line-clamp-2 mb-6 text-lg lg:text-2xl">
        {{ news.title }}
      </h3>
      <div class="flex sm:space-x-4 text-[8px] sm:text-xs whitespace-nowrap">
        <p class="mr-2">
          {{ timeToNow }}
        </p>
        <p>{{ news.source }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";
import moment from "moment";
const timeToNow = moment(props.news.publishedAt).fromNow();

const props = defineProps({
  news: { type: Object, required: true },
});
</script>
