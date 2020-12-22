<template>
  <div>
    <div class="bg-secondary-dark pt-4">
      <div class="bg-secondary-blue text-white mt-20">
        <div class="sub-navbar container mx-auto flex justify-center">
          <a href="#" class="sub-navbar__item">Blog</a>
          <a href="#" class="sub-navbar__item">Engineering</a>
          <a href="#" class="sub-navbar__item">Profile</a>
          <a href="#" class="sub-navbar__item">Tutorial</a>
          <a href="#" class="sub-navbar__item">Tips & Trick</a>
          <a href="#" class="sub-navbar__item">Growth & Culture</a>
          <a href="#" class="sub-navbar__item">Newsroom</a>
          <a href="#" class="sub-navbar__item">Promo</a>
        </div>
      </div>
    </div>
    <div>
      <div class="container mx-auto flex">
        <div class="w-3/5">
          <img src="@/assets/images/blog-menu.jpg" alt="" />
        </div>
        <div class="w-2/5 p-8">
          <div class="text-primary-active">HUBUNGKAN DENGAN KAMI</div>
          <div class="font-bold text-2xl">Ikuti Refactory</div>
          <div class="social-media-sidebar">
            <div>
              <div class="social-media-sidebar__icon">
                <font-awesome :icon="['fab', 'linkedin']" />
              </div>
              Linkedin
            </div>
            <div>
              <div class="social-media-sidebar__icon">
                <font-awesome :icon="['fab', 'facebook']" />
              </div>
              Facebook
            </div>
            <div>
              <div class="social-media-sidebar__icon">
                <font-awesome :icon="['fab', 'instagram']" />
              </div>
              Instagram
            </div>
            <div>
              <div class="social-media-sidebar__icon">
                <font-awesome :icon="['fab', 'youtube']" />
              </div>
              Youtube
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sub-navbar {
  &__item {
    transition: all ease 0.3s;
    @apply py-8 px-8 font-bold;
    &:hover {
      @apply bg-secondary-active;
    }
  }
}

.social-media-sidebar {
  & > div {
    @apply flex place-items-center font-bold;
    transition: all ease 0.3s;
    &:hover {
      @apply cursor-pointer;

      color: #6ec1e4 !important;
      .social-media-sidebar__icon {
        color: #6ec1e4 !important;
        border: solid #6ec1e4 2px;
      }
    }
  }
  &__icon {
    @apply text-3xl grid place-items-center rounded-full my-2 mr-5;
    transition: all ease 0.3s;
    color: #4e8ba1;
    border: solid #4e8ba1 2px;
    width: 50px;
    height: 50px;
  }
}
</style>
