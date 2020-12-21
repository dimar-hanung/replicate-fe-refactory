<template>
  <div
    class="flex px-20 py-4 absolute z-10 w-full justify-between place-items-center text-white text-base"
  >
    <div>
      <img :src="require('@/assets/static/' + logoImage + '')" />
    </div>
    <div class="flex">
      <router-link to="/">Home</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/custom-trainings">Custom Trainings</router-link>
      <router-link to="/case-studies">Case Studies</router-link>
      <router-link to="/blog">Blog</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logoImage: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      key: "value"
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  @apply px-4 font-semibold;
  font-family: "Montserrat", sans-serif;
  transition: all ease 0.3s;
  &:hover {
    @apply text-primary-active;
  }
}
</style>
