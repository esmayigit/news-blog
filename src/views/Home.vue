<template>
  <div>
    <h1 class="font-bold text-4xl ml-8 md:ml-10 mb-7 mt-5 md:mt-9">
      Hot Topics
    </h1>
    <CardHotTopic />

    <h1 class="font-bold text-2xl ml-8 my-7">Latest News</h1>

    <NewsList :news-list="newsList" />
    <div v-if="loadingStatus">Loading......</div>
  </div>
</template>

<script setup>
import NewsList from "../components/NewsList.vue";
import CardHotTopic from "../components/CardHotTopic.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const loadingStatus = ref(store.getters.loadingStatus);
console.log(loadingStatus.value);
const newsList = store.state.newsList;
store.dispatch("getAllNews");
</script>

<style></style>
