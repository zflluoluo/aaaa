<template>
  <swiper class="fl-swiper">
    <swiper-item v-for="item in banner" :key="item">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "detailSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style scoped>
.fl-swiper {
  height: 280px;
  overflow: hidden;
}
</style>
