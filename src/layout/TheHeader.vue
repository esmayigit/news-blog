<template>
  <header class="p-8 relative z-20 w-full top-0 bg-gray-100">
    <nav class="flex justify-between">
      <div
        class="flex space-x-4 items-center font-bold text-base"
        @click="hiddenMenu = false"
      >
        <a href="#" class="text-white bg-black p-2 rounded-lg">News</a>
        <a href="#" class="text-black">Portal</a>
      </div>
      <div class="flex space-x-8 items-center">
        <transition>
          <input
            v-if="hiddenSearchBar"
            v-model="searchQuery"
            type="text"
            placeholder="Search for news..."
            @blur="hiddenSearchBar = false"
          />
          <a v-else href="#" @click="hiddenSearchBar = !hiddenSearchBar">
            <img
              src="https://img.icons8.com/ios/50/000000/search--v1.png"
              class="w-6 h-6"
            />
          </a>
        </transition>

        <img
          src="https://img.icons8.com/fluency-systems-regular/48/000000/menu--v1.png"
          class="w-6 h-6 hover:cursor-pointer"
          @click="hiddenMenu = !hiddenMenu"
        />
      </div>
    </nav>
  </header>
  <transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <HiddenNavbarMenu v-if="hiddenMenu" @hide-menu="hiddenMenu = false" />
  </transition>
</template>

<script setup>
import { gsap } from "gsap";
import { ref } from "vue";
import HiddenNavbarMenu from "./HiddenNavbarMenu.vue";

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.height = 0;
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    height: "100vh",
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

const hiddenMenu = ref(false);

const hiddenSearchBar = ref(false);
const searchQuery = ref("");
</script>
