<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>发布</span>
      <span></span>
    </div>
    <div class="publish_main">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
      <img src="./m1.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const onClickLeft = () => history.back();
const value1 = ref(0);
const value2 = ref("a");
const option1 = [
  { text: "二手房出售", value: 0 },
  { text: "出租房", value: 1 },
  { text: "求购", value: 2 },
  { text: "求租", value: 3 },
];
const option2 = [
  { text: "通过", value: "a" },
  { text: "不通过", value: "b" },
  { text: "审核中", value: "c" },
];
</script>

<style lang="less" scoped>
.navbar {
  color: #fff;
  width: 100%;
  height: 80px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to right, rgb(10, 121, 242), rgb(52, 160, 254));
  span {
    display: inline-block;
    font-size: 22px;
    padding-top: 20px;
  }
}
img {
  width: 100%;
}
</style>
