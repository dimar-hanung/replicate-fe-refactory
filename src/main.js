import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/assets/styles/index.scss";
import "@/assets/styles/package/nprogress.css";

import VueAwesomeSwiper from "vue-awesome-swiper";
import Swiper, { Pagination, Autoplay } from "swiper";
Swiper.use([Pagination, Autoplay]);
// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

// start - Vue Toast Message
import VueToast from "vue-toast-notification";
import "@/assets/styles/package/theme-sugar.css";
Vue.use(VueToast, {
  position: "top-right",
  duration: 2500
});
// end - Vue Toast Message

import PrimaryHeader from "@/components/PrimaryHeader.vue";
Vue.component("primary-header", PrimaryHeader);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
