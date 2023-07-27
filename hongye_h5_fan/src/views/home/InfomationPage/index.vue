<template>
  <div>
    <div class="info_header">
      <span>信 息</span>
    </div>
    <div class="info_main">
      <router-link to="/home/infomationpage/interact">
        <van-cell title="互动信息" is-link class="info_router" />
      </router-link>
      <router-link to="/home/infomationpage/system">
        <van-cell title="系统消息" is-link class="info_router" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.info_header {
  color: #fff;
  width: 100%;
  height: 150px;
  text-align: center;
  background: rgb(25, 135, 246);
  span {
    display: inline-block;
    font-size: 22px;
    padding-top: 20px;
  }
}
.info_router {
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-bottom: 1px solid #000;
}
</style>
