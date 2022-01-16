<template>
  <div
    class="grid grid-cols-2 grid-flow-row gap-x-5 gap-y-2 md:gap-y-10 sm:grid-cols-3 md:grid-cols-4 px-8 mb-2 md:mb-8"
  >
    <transition-group
      name="home-news"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <CardNews
        v-for="(news, index) in newsList.slice(0, 8)"
        :key="index"
        :news="news"
        :data-index="index"
        class="p-2 grayscale hover:grayscale-0 hover:shadow hover:shadow-cyan-500 hover:scale-105 hover:rounded-lg"
      />
    </transition-group>
  </div>
</template>

<script setup>
import CardNews from "./CardNews.vue";
import { gsap } from "gsap";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const newsList = computed(() => store.state.newsList);

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.height = 0;
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    height: "100%",
    delay: el.dataset.index * 0.4,
    onComplete: done,
  });
};
const leave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.35,
    onComplete: done,
  });
};
</script>
