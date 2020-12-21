<template>
  <div id="app">
    <the-navbar logoImage="refactory-hd.png" />
    <router-view />
  </div>
</template>
<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  components: {
    TheNavbar
  }
};
</script>
