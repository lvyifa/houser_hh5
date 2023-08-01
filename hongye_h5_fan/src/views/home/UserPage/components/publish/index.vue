<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>发布</span>
      <span></span>
    </div>
    <div class="publish_main"></div>
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
</style>
