<template>
  <div class="relative pt-16">
    <div class=" -z-1 absolute left-0 right-0 top-0 h-full">
      <div
        class="bg__header absolute top-0 left-0 right-0 bottom-0 w-full h-full"
      ></div>
      <div
        class="-z-1 absolute top-0 left-0 right-0 bottom-0 w-full h-full"
        :style="cssProps"
      ></div>
    </div>

    <div class="text-white">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/static/" +
          this.backgroundImage +
          "")})`
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.test {
}
</style>
