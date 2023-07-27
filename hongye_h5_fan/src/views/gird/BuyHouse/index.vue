<template>
  <div class="buyhouse">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>买 房</span>
      <span></span>
    </div>
    <div class="buyhouse_main">
      <div class="main_first">
        <span>
          <van-area title="地区选择" :area-list="areaList" @confirm="conarea" />
        </span>
        <span></span>
        <span></span>
      </div>
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image
            src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
          />
        </van-grid-item>
        <van-grid-item>
          <van-image
            src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
          />
        </van-grid-item>
        <van-grid-item>
          <van-image
            src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"
          />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
import { areaList } from "@vant/area-data";
const conarea = (value: any) => {
  console.log(value);
};
</script>

<style lang="less" setup>
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
</style>
