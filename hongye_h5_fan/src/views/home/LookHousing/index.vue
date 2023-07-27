<template>
  <div>
    <div class="look_header">
      <span>找 房</span>
    </div>
    <div class="look_main">
      <van-tabs
        v-model:active="active"
        class="vantab"
        title-active-color="#f00"
      >
        <van-tab title="求租">
          <div class="tab_input_one">
            <van-icon name="like" color="#f00" />
            <input type="text" placeholder="请输入意向城市、区域、意向楼盘" />
          </div>
          <div class="tab_input_two">
            <span>
              <input type="text" placeholder="请输入姓名" />
            </span>
            |
            <span>
              <input type="text" placeholder="请输入手机号" />
            </span>
          </div>
          <div class="tab_input_three">
            <input type="text" placeholder="请输入意向价格" />元
          </div>
          <p class="input_p">
            <van-icon name="fire-o" color="#ccc" />
            隐私保护已开启
          </p>
          <van-button
            color="linear-gradient(to right, #ff6034, #ee0a24)"
            class="input_button"
          >
            发布需求
          </van-button>
          <div class="input_footer">
            <p>当前有148位职业顾问为您服务</p>
          </div>
        </van-tab>
        <van-tab title="求购">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const active = ref(0);
const value = ref("");
</script>

<style lang="less">
.look_header {
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
.look_main {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border: solid 1px #000;
  margin-top: -30px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.vantab {
  margin-top: 6px;
  width: 100%;
  height: 100%;
}
.input_p {
  font-size: 12px;
  padding-left: 22px;
  color: #b4b1b1;
}
.tab_input_one {
  input {
    border: 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    color: #666;
    width: 80%;
    margin-left: 2px;
    font-size: 15px;
  }
  margin-top: 15px;
  width: 100%;
  margin-left: 15px;
}
.tab_input_two {
  margin-top: 15px;
  color: #ccc;
  input {
    width: 35%;
    margin-left: 30px;
    font-size: 14px;
    border: 0;
  }
}
.tab_input_three {
  margin-top: 15px;
  margin-left: 30px;
  width: 80%;
  input {
    border: 0;
    color: #666;
    width: 80%;
    margin-left: 2px;
    font-size: 15px;
  }
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}
.input_button {
  width: 90%;
  margin: 8px 15px;
}
.input_footer {
  width: 90%;
  height: 30px;
  border: solid 2px rgb(255, 102, 110);
  border-radius: 50px;
  margin: 8px 15px;
  color: rgb(255, 102, 110);
  p {
    text-align: center;
    font-size: 15px;
  }
}
</style>
