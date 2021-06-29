<template>
  <main>
    <div class="main_container">
      <ComSwiper></ComSwiper>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import ComSwiper from '../../../components/ComSwiper/index.vue'
 
export default defineComponent({
  name: 'Mains',
  components: {
    ComSwiper,
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
  main {
    grid-column: 2/3;
    grid-row: 2/3;
    background: #fff;
    height: 1000px;
  }
  .main_container {
    padding: 92px 30px 0 30px;
  }
  img {
  width: 100%;
  height: 100%;
}
.swiper-container {
  width: 100%;
  height: 180px;
  .swipe-img {
    height: 100%;
  }
}
</style>
