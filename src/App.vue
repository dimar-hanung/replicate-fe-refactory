<template>
  <div id="app">
    <the-navbar logoImage="refactory-hd.png" />
    <router-view />
    <the-footer />
    <div class="whatsapp-button">
      <font-awesome class="text-2xl text-white" :icon="['fab', 'whatsapp']" />
    </div>
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
