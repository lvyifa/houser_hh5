<template>
  <div class="inter">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>信息</span>
      <span> </span>
    </div>
    <div class="system_main">
      <van-cell value="上午7:00" class="cell">
        <template #title>
          <p class="p1">您好，您发布的二手房出售已经审核通过了</p>
          <p><a href="">点击查看</a></p>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
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

.p1 {
  width: 280px;
}
a {
  color: blue;
}
</style>
