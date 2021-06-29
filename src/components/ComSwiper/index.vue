<template>
      <swiper
        :autoplay="swiperOptions.autoplay"
        :loop="swiperOptions.loop"
        :speed="swiperOptions.speed"
        :pagination="swiperOptions.pagination"
        :slidesPerView = 5
        :centeredSlides = true
        class="swiper-container"
      >
        <swiper-slide class="swipe-img">
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/150835/21/14707/172863/5ff6b469E72637b85/4f80b1d32d628ed3.jpg!q70.jpg.dpg"
          />
        </swiper-slide>
        <swiper-slide class="swipe-img">
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/141734/35/19747/233355/5fe411b7Ee9e142c1/3c081878ff6cdf72.jpg!cr_1125x445_0_171!q70.jpg.dpg"
          />
        </swiper-slide>
      </swiper>

</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.less'
SwiperCore.use([Autoplay, Pagination])
 
export default defineComponent({
  name: 'Mains',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const state = reactive({
      swiperOptions: {
        autoplay: false,
        loop: true,
        speed: 1000,
        pagination: false
      }
    })
    return { ...toRefs(state) }
  }
})
</script>

<style lang="scss" scoped>

.swiper-container {
  width: 100%;
  height: 180px;
  .swipe-img {
    height: 100%;
  }
}
</style>
