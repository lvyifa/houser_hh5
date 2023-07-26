<template>
  <div class="header">
    <div class="nav">宏烨找房</div>
    <van-search
      v-model="value"
      show-action
      shape="round"
      label="北京吧"
      placeholder="请输入搜索关键词"
      background="linear-gradient(45deg, rgb(92, 116, 241), rgb(86, 178, 254))"
      @search="onSearch"
      class="search"
    >
      <template #action>
        <div @click="onClickButton" class="serachitem">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script setup>
import { Toast } from "vant";
import { ref } from "vue";
const value = ref("");
const onClickButton = () => Toast(value.value);
</script>

<style lang="less">
.header {
  width: 100%;
  height: 74px;
}
.nav {
  background: skyblue;
}
.serachitem {
  border-radius: 50px;
  background: linear-gradient(
    45deg,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    purple,
    red
  );
  color: #f00;
}
</style>
