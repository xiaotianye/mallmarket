<template>
  <tab-bar>
    <tab-bar-item path="/home" userColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home-active.png"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" userColor="green">
      <img slot="item-icon" src="~assets/img/tabbar/fen-lei.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/fen-lei-active.png"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" userColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/cart-active.png"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" userColor="orange">
      <img slot="item-icon" src="~assets/img/tabbar/geren.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/geren-active.png"
        alt=""
      />
      <div slot="item-text">个人</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/tabBar.vue'
import TabBarItem from 'components/common/tabbar/tabBarItem.vue';
export default {
  name: 'MainTabBar',
  components: {
    TabBarItem,
    TabBar
  }
};
</script>

<style>
</style>