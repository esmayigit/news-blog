<template>
  <div
    v-if="latestNews"
    class="flex w-11/12 justify-center h-[200px] mx-auto px-4 sm:px-0 sm:h-[300px] relative"
  >
    <img
      :src="latestNews.image_url"
      alt=""
      class="block w-full h-full rounded-lg aspect-video object-cover"
    />
    <div
      class="absolute w-60 sm:w-11/12 md:w-full h-20 md:h-40 top-28 sm:top-52 md:top-40 flex flex-col md:px-6 space-y-4"
    >
      <h1
        class="text-base sm:text-2xl md:text-3xl lg:text-4xl text-slate-100 font-extrabold line-clamp-2"
      >
        {{ latestNews.title }}
      </h1>
      <div class="flex space-x-4">
        <p class="text-slate-100 text-[8px] sm:text-xs">2 hours ago</p>
        <p class="text-slate-100 text-[8px] sm:text-xs">CNN Source</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const latestNews = computed(() => store.getters.newsListById(2));
</script>
