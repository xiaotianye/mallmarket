<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div class="mid" slot="mid">购物街</div>
    </nav-bar>
    <home-swiper :banners = banners />
    <recommend :recommends = recommends />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navBar.vue";
import { GetNavData } from "network/home.js";
import HomeSwiper from './child/homeSwiper.vue'
import Recommend from 'components/common/recommend/recommend.vue';
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend
  },
  created() {
    GetNavData().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  background-color: Pink;
  color: #fff;
}
</style>