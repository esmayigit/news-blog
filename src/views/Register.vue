<template>
  <div
    class="flex flex-col w-1/3 justify-center mx-auto items-center mt-40 border-4 p-4"
  >
    <h3 class="text-3xl text-center mb-3">Register</h3>
    <input
      v-model="userData.fullName"
      type="text"
      placeholder="Tam Ad"
      class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
    />
    <input
      v-model="userData.userName"
      type="text"
      placeholder="Kullanici Adi"
      class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
    />
    <input
      v-model="userData.password"
      type="text"
      placeholder="Sifre"
      class="mb-3 border-2 p-2 bg-slate-300/25 text-zinc-900"
    />

    <button
      class="bg-red-200 px-6 py-2 rounded-lg shadow-inner active:shadow-none shadow-orange-700"
      @click="onSave"
    >
      Kayit Ol
    </button>
    <span class="text-center mt-6"
      >Zaten Uyeyim,<a href="#" class="ml-2 text-red-900"
        >Giris Yapmak istiyorum!</a
      ></span
    >
  </div>
</template>

<script>
import CryptoJS from "crypto-js";

export default {
  data() {
    return {
      userData: {
        userData: null,
        fullName: null,
        password: null,
      },
    };
  },
  methods: {
    onSave() {
      const password = CryptoJS.HmacSHA1(
        this.userData.password,
        this.$store.getters._saltKey
      ).toString();
      this.$useAxios
        .post("/users", { ...this.userData, password })
        .then((response) => {
          console.log("response>", response);
          this.$router.push({ name: "HomePage" });
        });
    },
  },
};
</script>
