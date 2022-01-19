<template>
  <div class="flex flex-col m-8 space-y-10 items-center justify-center">
    <h1 class="font-bold text-xl md:text-6xl text-center mt-12">
      {{ singleNews.title }}
    </h1>
    <div class="flex flex-col space-y-4 justify-between items-center">
      <p class="text-base">
        {{ publishTime }}
      </p>
      <p class="text-sm">
        {{ singleNews.source }}
      </p>
    </div>
    <img :src="singleNews.image_url" alt="" class="w-80" />

    <div class="m-6 min-h-screen">
      {{ singleNews.content }}
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import moment from "moment";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
store.dispatch("getAllNews");
const route = useRoute();
const id = route.params.id;
console.log(id);
const singleNews = computed(() => store.getters.newsListById(id));
console.log(singleNews.value);
const publishTime = moment(singleNews.value.publishAt).format(
  "dddd,MMMM Do YYYY, h:mm:ss a"
);
</script>
