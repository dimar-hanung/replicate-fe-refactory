<template>
  <div>
    <div class="text-center py-4">PARTNER EKSKLUSIF KAMI</div>
    <div class="py-4 bg-carousel">
      <swiper
        class="swiper container mx-auto w-max-1140 place-items-center"
        :options="swiperOption"
      >
        <swiper-slide
          ><img src="@/assets/static/logo/berlian-sistem-informasi.png"
        /></swiper-slide>
        <swiper-slide><img src="@/assets/static/logo/esdm.png"/></swiper-slide>
        <swiper-slide
          ><img src="@/assets/static/logo/gigaming.png"
        /></swiper-slide>
        <swiper-slide><img src="@/assets/static/logo/gojek.png"/></swiper-slide>
        <swiper-slide
          ><img src="@/assets/static/logo/keller.png"
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/static/logo/mandiri.png"
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/static/logo/pindad.png"
        /></swiper-slide>
        <swiper-slide><img src="@/assets/static/logo/qasir.png"/></swiper-slide>
        <swiper-slide><img src="@/assets/static/logo/um.png"/></swiper-slide>
        <swiper-slide
          ><img src="@/assets/static/logo/universitas-terbuka.png"
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/static/logo/ya-baik.png"
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "swiper-example-responsive-breakpoints",
  title: "Responsive breakpoints",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 50,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 6,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
