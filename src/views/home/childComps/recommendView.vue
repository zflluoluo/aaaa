<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 10px 15px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
}
.recommend-item p {
  font-size: 14px;
  padding: 10px 0;
}
</style>
