<template>
  <div class="goods-list">
    <goods-list-item
      v-for="item in goodsList"
      :goodsListItem="item"
    ></goods-list-item>
  </div>
</template>
<script>
import goodsListItem from "./goodsListItem";
export default {
  name: "goodsList",
  components: {
    goodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.goods-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
