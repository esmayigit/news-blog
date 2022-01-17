import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { useAxios } from "../utils/useAxios.js";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "newsfeedblog123!?asd",
    newsList: [],
  },
  getters: {
    _isAuthenticated: (state) => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password;
      return user;
    },
    _saltKey: (state) => state.saltKey,
    newsListById: (state) => (id) => {
      return state.newsList.find((news) => news.id == id);
    },
  },
  mutations: {
    setUser(state, user) {
      console.log("user=>", user);
      state.user = user;
    },
    UPDATE_NEWSLIST(state, payload) {
      state.newsList = payload;
    },
  },
  actions: {
    getAllNews({ commit }) {
      useAxios.get("/news").then((response) => {
        commit("UPDATE_NEWSLIST", response.data);
      });
    },
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
