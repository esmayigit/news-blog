import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/router.js";
import store from "./store/store.js";
import { useAxios } from "./utils/useAxios.js";

import TheHeader from "./layout/TheHeader.vue";
import TheFooter from "./layout/TheFooter.vue";

import "./assets/css/style.css";

const app = createApp(App);
app.use(router);
app.component("TheHeader", TheHeader);
app.component("TheFooter", TheFooter);

app.use(store);
app.config.globalProperties.$useAxios = useAxios;
app.provide("useAxios", useAxios);
app.mount("#app");
