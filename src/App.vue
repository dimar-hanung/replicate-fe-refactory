<template>
  <div id="app">
    <the-navbar logoImage="refactory-hd.png" />
    <router-view />
    <the-footer />
  </div>
</template>
<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheNavbar,
    TheFooter
  }
};
</script>
