<template>
  <div
    class="flex flex-col w-1/3 justify-center mx-auto items-center mt-40 border-4 p-4"
  >
    <h3 class="text-3xl text-center mb-3">Login</h3>
    <input
      v-model="userData.userName"
      type="text"
      placeholder="username"
      class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
    />
    <input
      v-model="userData.password"
      type="text"
      placeholder="password"
      class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
    />
    <button
      class="bg-red-200 px-6 py-2 rounded-lg shadow-inner active:shadow-none shadow-orange-700"
      @click="onSubmit"
    >
      Login
    </button>
    <span class="text-center mt-3 text-sm">
      I have no account,
      <router-link
        :to="{ name: 'RegisterPage' }"
        class="text-red-900 hover:text-black"
      >
        Register!!
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
  password: null,
});

const onSubmit = () => {
  const password = CryptoJS.HmacSHA1(
    this.userData.password,
    this.$store.getters._saltKey
  ).toString();
  console.log(password);
  useAxios
    .get(`/users?userName=${this.userData.userName}&password=${password}`)
    .then((response) => {
      if (response?.data?.length > 0) {
        store.commit("setUser", response?.data[0]);
        router.push({ name: "HomePage" });
      } else {
        alert("Boyle bir kullanici bulunamadi");
      }
    })
    .catch((e) => console.log(e));
};
</script>
