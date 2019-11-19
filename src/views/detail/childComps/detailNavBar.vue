<template>
  <div>
    <nav-bar>
      <div slot="left" @click="goBack" class="back">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="details-title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          @click="titleClick(index)"
        >
          <span :class="{ active: index === currentIndex }">{{ item }}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "detailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    goBack() {
      //this.$router.go(-1);
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.details-title {
  display: flex;
  justify-content: space-around;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
  padding-bottom: 5px;
}
.back img {
  width: 18px;
  margin-top: 13px;
}
</style>
