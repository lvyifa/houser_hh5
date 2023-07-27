<template>
  <!-- 经纪人 -->
  <div>
    <div class="broker_nav">
      <b>经纪人</b>
      <span>更多</span>
    </div>
    <div class="broker_main">
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item>
          <img
            src="https://img0.baidu.com/it/u=3933679416,2228485248&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
          <h3>建发曹颖</h3>
          <p>建发 · 文翰府</p>
          <van-button round color="linear-gradient(to right, #ff6034, #ee0a24)">
            <van-icon size="18" name="chat-o" />
            <span>咨询</span>
          </van-button>
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.broker_nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  b {
    font-size: 23px;
  }
  span {
    color: #666;
    font-size: 15px;
  }
}
.broker_main {
  width: 100%;
  height: 200px;
  .van-swipe .van-swipe-item {
    width: 200px !important;
    height: 200px;
    font-size: 20px;
    border: 1px solid #ccc;
    text-align: center;

    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
