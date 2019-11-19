<template>
  <div class="shop-info">
    <div class="logo-box padding20 flex-row align-items">
      <img :src="shop.logo" />
      <span>{{shop.name}}</span>
    </div>
    <div class="flex-row-between padding-lr margin-bottom20">
      <dl class="flex-row">
        <dd class="flex-col">
          <span>{{shop.fans}}-</span>
          <span>{{shop.sells}}</span>
          <span>总销量</span>
        </dd>
        <dd  class="flex-col">
          <span>{{shop.goodsCount}}</span>
          <span>全部宝贝</span>
        </dd>
      </dl>
      <dl>
        <dd v-for="item in shop.score" class="score">
          <span>{{item.name}}:</span>
          <span :class="{'red':item.isBetter}">{{item.score}}</span>
          <span :class="{'bg-red':item.isBetter}">{{item.isBetter?'高':'低'}}</span>
        </dd>
      </dl>
    </div>
    <div class="text-center">
        <a href="">进店逛逛</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.logo-box img{
    width: 60px;
    margin-right: 10px;
}
.shop-info dl{
    width: 50%;
}
.shop-info dl:first-child{
    border-right:1px solid #e5e5e5;
}
.shop-info dl:last-child{
    padding-left: 10px;
}
.score span{
    margin-right: 10px;
    margin-bottom: 5px;
}
.score span:nth-child(2){
    color: green;
    width: 40px;
    display: inline-block;
}
.score span:nth-child(3){
    color: #fff;
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    text-align: center;
    background-color: green;
    display: inline-block;
}
.score span.red{
    color: red;
}
.score span.bg-red{
    background-color: red;
}
.text-center a{
    display: inline-block;
    padding: 4px 20px;
    background-color: var(--color-tint);
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
}
.text-center{
    border-bottom: 6px solid #f5f5f5;
    padding-bottom: 20px;
}
</style>