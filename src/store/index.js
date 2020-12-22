import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

const dataState = createPersistedState({
  paths: ["auth"],
  storage: {
    getItem: key => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: key => ls.remove(key)
  }
});
console.log("Module-List", modules);
export const store = new Vuex.Store({
  state: {
    data: ""
  },
  mutations: {},
  actions: {},
  modules,
  plugins: [dataState]
});
