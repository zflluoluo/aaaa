<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    //创建Bscroll对象
    this.scroll = new Bscroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    });
    //监听scroll滚动事件
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    //监听pullingUp下拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 1000) {
      //滚动到...位置
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      //下拉
      this.scroll.finishPullUp();
    },
    refresh() {
      //刷新
      // console.log("---------");
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      //监听滚动的位置Y
      return this.scroll ? this.scroll.Y : 0;
    }
  }
};
</script>
