<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="scroll-height"> 
      <detail-swiper :banner="detailBanners"></detail-swiper>
      <detail-base-info :goodsData = 'goods'></detail-base-info>
      <detail-shop-info :shop = 'shop'></detail-shop-info>
      <detail-comment-info :detailInfo = "detailInfo"></detail-comment-info>
      <detail-goods-param :goodsParam = 'goodsParam'></detail-goods-param>
    </scroll> 
  </div>
</template>
<script>
import detailNavBar from "./childComps/detailNavBar";
import detailSwiper from "./childComps/detailSwiper";
import detailBaseInfo from "./childComps/detailBaseInfo";
import detailShopInfo from "./childComps/detailShopInfo";
import detailCommentInfo from "./childComps/detailCommentInfo";
import detailGoodsParam from "./childComps/detailGoodsParam";
import scroll from "components/common/scroll/scroll";
import { getDetail,Goods,Shop,DoodsParam } from "network/detail";
export default {
  name: "detail",
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailCommentInfo,
    detailGoodsParam,
    scroll,
  },
  data() {
    return {
      iid: null,
      detailBanners: [],
      goods:{},
      shop:{},
      detailInfo:{},
      goodsParam:{},
    };
  },
  created() {
    //1.获取iid
    this.iid = this.$route.params.iid;
    //2.请求数据
    getDetail(this.iid).then(res => {
      console.log(res); 
      const data = res.result;
      //获取顶部轮播图片
      this.detailBanners = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);
       //获取商品详情信息
      this.detailInfo = data.detailInfo;
      //获取商品参数信息
      this.goodsParam = new DoodsParam(data.itemParams.info,data.itemParams.rule)
      console.log(this.goodsParam);
    });
  }
};
</script>
<style scoped>
.detail{
  position: relative;
  z-index: 99;
  background-color: #fff;
}
.detail-nav-bar{
  position:fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #fff;
}
.scroll-height{
  width: 100vw;
  height: calc(100vh - 44px);
  margin-top: 44px;
}
</style>
