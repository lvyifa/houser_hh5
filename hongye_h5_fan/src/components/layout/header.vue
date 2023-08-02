<template>
  <div class="header">
    <div class="nav">宏烨找房</div>
    <van-search
      v-model="inputdata"
      show-action
      shape="round"
      label="北京吧"
      placeholder="请输入搜索关键词"
      background="linear-gradient(45deg, rgb(92, 116, 241), rgb(86, 178, 254))"
      class="search"
      @keydown="ask"
    >
      <template #action>
        <div @click="onClickButton" class="serachitem">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script lang="ts" setup>
import { Toast } from "vant";
import { ref } from "vue";
const inputdata = ref("");
const onClickButton = () => {
  console.log(inputdata.value);
};
const ask = (keyboard: any) => {
  if (keyboard.keyCode == 13) {
    console.log(inputdata.value);
  }
};
</script>

<style lang="less">
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
.header {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 55;
}
</style>
