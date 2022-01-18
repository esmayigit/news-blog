<template>
  <section
    class="fixed z-10 bottom-0 bg-slate-700 text-zinc-400 font-bold flex flex-col space-x-9 items-center justify-center h-screen w-full text-5xl"
  >
    <div class="flex flex-col justify-start items-start space-y-4">
      <router-link
        :to="{ name: 'HomePage' }"
        class="hover:line-through"
        @click="$emit('hideMenu')"
      >
        Home
      </router-link>
      <div v-if="_isAuthenticated" class="flex flex-col items-start space-y-4">
        <router-link
          :to="{ name: 'NewPost' }"
          class="hover:line-through"
          @click="$emit('hideMenu')"
        >
          Add News
        </router-link>
        <button class="font-bold hover:line-through" @click="onLogout">
          Logout
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, defineEmits } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const emits = defineEmits({ hideMenu: Function });

const onLogout = () => {
  store.commit("logoutUser");
  router.push({ name: "HomePage" });
  emits("hideMenu");
};

const _isAuthenticated = computed(() => store.getters._isAuthenticated);
</script>
