<template>
  <div class="goods-list-item" @click="goodsItemClick">
    <!-- <a :href="goodsListItem.link"> -->
    <img :src="goodsListItem.showLarge.img" @load="imgLoad" />
    <div class="goods-info">
      <p>{{ goodsListItem.title }}</p>
      <span class="price">{{ goodsListItem.price }}</span>
      <span class="collect">{{ goodsListItem.cfav }}</span>
    </div>
    <!-- </a> -->
  </div>
</template>
<script>
export default {
  name: "goodsListItem",
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      //console.log("图片加载完成！");
      this.$bus.$emit("imgItemLoad");
    },
    goodsItemClick() {
      this.$router.push("/detail/" + this.goodsListItem.iid);
    }
  }
};
</script>
<style scoped>
.goods-list-item {
  width: 48%;
}
.goods-list-item a {
  display: block;
  width: 100%;
}
.goods-list-item img {
  display: block;
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  padding: 5px;
  text-align: center;
  font-size: 14px;
}
.goods-info p {
  width: 100%;
  height: 24px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  color: var(--color-high-text);
  margin-right: 10px;
}
.collect {
  padding-left: 16px;
  background-image: url("~assets/img/common/collect.svg");
  background-repeat: no-repeat;
  background-size: 14px 14px;
}
</style>
