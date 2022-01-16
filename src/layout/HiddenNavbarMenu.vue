<template>
  <section
    class="fixed z-10 bottom-0 bg-slate-700 text-zinc-400 font-bold flex flex-col space-x-9 justify-center items-center h-screen w-full text-5xl"
  >
    <router-link :to="{ name: 'HomePage' }"> Home </router-link>
    <router-link v-if="_isAuthenticated" :to="{ name: 'NewPost' }">
      Add News
    </router-link>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const _isAuthenticated = computed(() => store.getters._isAuthenticated);
</script>
