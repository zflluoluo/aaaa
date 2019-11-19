module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //配置路径别名
        assets: "@/assets",
        common: "@/common",
        views: "@/views",
        network: "@/network",
        components: "@/components"
      }
    }
  }
};
