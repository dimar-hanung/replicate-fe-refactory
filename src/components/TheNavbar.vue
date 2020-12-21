<template>
  <div
    class="flex px-20 py-4 absolute z-10 w-full justify-between place-items-center text-white text-base"
  >
    <div>
      <img :src="require('@/assets/static/' + logoImage + '')" />
    </div>
    <div class="hidden lg:flex">
      <router-link v-for="(item, id) in menuList" :key="id" :to="item.path">{{
        item.text
      }}</router-link>
    </div>
    <div class="bars-icon grid lg:hidden" @click="isOpen = !isOpen">
      <font-awesome class="text-lg" v-if="!isOpen" :icon="['fa', 'bars']" />
      <font-awesome class="text-lg" v-else :icon="['fa', 'times']" />
    </div>
    <transition name="fade">
      <div
        class="navbar-mobile absolute block lg:hidden right-0 top-0 py-5 shadow w-full text-black h-auto "
        v-if="isOpen"
      >
        <div v-for="(item, id) in menuList" :key="id">
          <router-link :to="item.path">{{ item.text }}</router-link>
        </div>
      </div>
    </transition>
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
      isOpen: false,
      menuList: [
        { path: "/", text: "Home" },
        { path: "/courses", text: "Courses" },
        { path: "/custom-trainings", text: "Custom Trainings" },
        { path: "/case-studies", text: "Case Studies" },
        { path: "/blog", text: "Blog" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.bars-icon {
  @apply p-2 rounded absolute z-20 shadow bg-gray-700 place-items-center;
  width: 35px;
  height: 35px;
  right: 10px;
  top: 10px;
}
a {
  @apply px-4 font-semibold;
  font-family: "Montserrat", sans-serif;
  transition: all ease 0.3s;
  &:hover {
    @apply text-primary-active;
  }
}
</style>
