<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template slot="center" >购物街</template>
    </nav-bar>
    <tab-control
      class="tab-control fixed"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl2"
      v-show="isTabFixed"
    />
    <scroll
      class="height100"
      ref="scrollItem"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      />
      <!-- :class = '{fixed:isTabFixed}' -->
      <goods-list :goodsList="goodsData" />
    </scroll>
    <back-to @click.native="backClick" v-show="isShowBackTo" />
  </div>
</template>

<script>
import homeSwiper from "./childComps/homeSwiper";
import recommendView from "./childComps/recommendView";
import featureView from "./childComps/featureView";

import NavBar from "components/common/navbar/NavBar";
import tabControl from "components/content/tabControl/tabControl";
import goodsList from "components/content/goodsList/goodsList";
import scroll from "components/common/scroll/scroll";
import backTo from "components/content/backTo/backTo";
//import goodsListItem from "components/content/goodsList/goodsListItem";

import { getHomeMultiData, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

export default {
  name: "Home",
  components: {
    homeSwiper,
    recommendView,
    featureView,
    NavBar,
    tabControl,
    goodsList,
    scroll,
    backTo
    // goodsListItem
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTo: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  computed: {
    goodsData() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    //请求banner和品类数据
    this.getHomeMultiData();
    //请求goods数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scrollItem.refresh, 500);
    //图片加载完成后再执行refresh()刷新scrollHeight
    this.$bus.$on("imgItemLoad", () => {
      refresh();
    });
  },
  destroyed() {
    //查看页面是否被销毁
    console.log("destroyed!");
  },
  activated() {
    //回到上次滚动的位置
    this.$refs.scrollItem.scrollTo(0, this.saveY, 0);
    //做一次滚动刷新
    this.$refs.scrollItem.refresh();
  },
  deactivated() {
    //记录上次滚动的位置
    this.saveY = this.$refs.scrollItem.scroll.y;
    //console.log(this.saveY);
  },
  methods: {
    /*
    事件监听相关
    */
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      //让tabControl的点击状态一致；
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scrollItem.scrollTo(0, 0, 1000);
    },
    contentScroll(position) {
      //判断backTop是否显示
      this.isShowBackTo = -position.y > 1000;
      //判断tabControl是否吸顶（position：fixed）;
      this.isTabFixed = -position.y > this.tabOffsetTop - 40;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      //1.监听图片是否加载完毕；2.刷新滚动区域；
      this.$refs.scrollItem.refresh();
    },
    swiperImgLoad() {
      //获取tabContrlBar的offsetTop值；
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      //console.log(this.tabOffsetTop);
    },
    /**
     * 数据请求相关
     */
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        //console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        //console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //完成上拉加载更多；
        this.$refs.scrollItem.finishPullUp();
      });
      //console.log(this.goods);
    }
  }
};
</script>

<style scoped>
#home {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding-top: 44px;
  padding-bottom: 20px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
/* .tab-control{
  position: sticky;
  top:0;
} */
.fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 99;
}
</style>
