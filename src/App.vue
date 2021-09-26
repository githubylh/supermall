<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbarItem path="/home">
        <img slot="item-img" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-img-active" src="./assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbarItem>
      <tabbarItem path="/category">
        <img slot="item-img" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="item-img-active" src="./assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbarItem>
      <tabbarItem path="/shopcart">
        <img slot="item-img" src="./assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-img-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbarItem>
      <tabbarItem path="/profile">
        <img slot="item-img" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="item-img-active" src="./assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
 import tabbar from "./components/common/tabbar.vue"
 import tabbarItem from "./components/common/tabbar-item.vue"
 import router from "./router/index"
  export default {
    name: 'App',
    router,
    components: {
      tabbar,
      tabbarItem
    }
  }
</script>

<style>
@import "./assets/css/base.css";
</style>
