<template>
  <div>
    <Header />

    <div class="home_main">
      <!-- 轮播 -->
      <van-swipe :autoplay="3000" lazy-render class="swiper">
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
      <!-- 宫格 -->
      <Grid />
      <!-- 楼市资讯 -->
      <Circle />
      <!-- 热门楼盘 -->
      <Popular />
      <!-- 经纪人 -->
      <Broker />
      <!-- 广告 -->
      <div class="advertisement">
        <img
          src="https://img2.baidu.com/it/u=954801843,1522075505&fm=253&fmt=auto&app=138&f=JPG?w=996&h=500"
          alt=""
        />
      </div>
      <!-- 二手房 -->
      <Second />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Grid from "./components/grid.vue";
import Circle from "./components/circle.vue";
import Popular from "./components/popular.vue";
import Broker from "./components/broker.vue";
import Second from "./components/secondhouse.vue";
import Header from "@/components/layout/header.vue";
const images = [
  "https://img2.baidu.com/it/u=567357414,4240886412&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img2.baidu.com/it/u=1361506290,4036378790&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img1.baidu.com/it/u=3549522664,2004387788&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
  "https://img0.baidu.com/it/u=1838040407,1274103844&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
];
</script>

<style lang="less" scoped>
.home_main {
  width: 100%;
  height: 100%;
  margin-top: 74px;
}
img {
  width: 100%;
  height: 100%;
}
.swiper {
  width: 100%;
  height: 200px;
}
.advertisement {
  img {
    border-radius: 10px 10px 0 0;
  }
  margin: 0 10px;
  margin-top: 10px;
}
</style>
