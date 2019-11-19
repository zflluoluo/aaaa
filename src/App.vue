<template>
  <div id="app">
    <div class="content">
      <keep-alive exclude="detail">
        <router-view />
      </keep-alive>
    </div>
    <div class="tab-bar">
      <main-tab-bar />
    </div>
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style scoped>
#app {
  /* display: flex;
  flex-direction: column; */
  height: 100vh;
}
 .content {
  /* flex: 1;
  overflow: hidden; */
  height: calc(100% - 44px);
} 
.tab-bar {
  height: 50px;
  position: fixed;
  left: 0;
  right: 0;
  bottom:0;
}
</style>
