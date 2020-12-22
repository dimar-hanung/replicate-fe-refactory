import axios from "axios";
import NProgress from "nprogress";
import Vue from "vue";
// import { store } from "../store";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
instance.interceptors.request.use(
  config => {
    // console.log("storee", store);
    NProgress.start();
    console.log({ request: config });
    return config;
  },
  error => Vue.$toast.open(error)
);
instance.interceptors.response.use(
  function(response) {
    NProgress.done();
    console.log({ response });
    return response;
  },
  function(error) {
    NProgress.done();

    return Promise.reject(error.response);
  }
);

export default instance;
