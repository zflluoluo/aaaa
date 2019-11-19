import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/Home.vue";
import Category from "@/views/category/Category.vue";
import Cart from "@/views/cart/Cart.vue";
import Profile from "@/views/profile/Profile.vue";
import Detail from "@/views/detail/detail.vue";
//安装插件
Vue.use(Router);
//创建router
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name:"Home",
    component: Home
  },
  {
    path: "/category",
    name:"Category",
    component: Category
  },
  {
    path: "/cart",
    name:"Cart",
    component: Cart
  },
  {
    path: "/profile",
    name:"Profile",
    component: Profile
  },
  {
    path: "/detail/:iid",
    name:"Detail",
    component: Detail
  }
];

const router = new Router({
  routes,
  mode: "history"
});
export default router;
