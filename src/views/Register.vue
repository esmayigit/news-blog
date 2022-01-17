<template>
  <div
    class="flex flex-col w-1/3 justify-center mx-auto items-center mt-40 border-4 p-4"
  >
    <h3 class="text-3xl text-center mb-3">Register</h3>
    <input
      v-model="userData.fullName"
      type="text"
      placeholder="Fullname"
      class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
    />
    <input
      v-model="userData.userName"
      type="text"
      placeholder="Username"
      class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
    />
    <input
      v-model="userData.password"
      type="text"
      placeholder="Password"
      class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
    />

    <button
      class="bg-red-200 px-6 py-2 rounded-lg shadow-inner active:shadow-none shadow-orange-700"
      @click="onSave"
    >
      Register
    </button>
    <span class="text-center mt-6"
      >I have already an account,
      <router-link
        :to="{ name: 'LoginPage' }"
        class="text-red-900 hover:text-black"
      >
        Login!
      </router-link>
    </span>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import CryptoJS from "crypto-js";
const useAxios = inject("useAxios");
const store = useStore();
const router = useRouter();

const userData = ref({
  userName: null,
  fullName: null,
  password: null,
});

const onSave = () => {
  const password = CryptoJS.HmacSHA1(
    userData.value.password,
    store.getters._saltKey
  ).toString();
  useAxios.post("/users", { ...userData.value, password }).then(() => {
    router.push({ name: "HomePage" });
  });
};
</script>
