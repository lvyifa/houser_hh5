<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>问题反馈</span>
      <span></span>
    </div>
    <div class="problem_main">
      <div class="main_item1">
        <p>联系方式</p>
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="main_time2">
        <p>反馈内容</p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="请输入"
        ></textarea>
      </div>
      <button>提交反馈</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
</script>

<style lang="less">
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
.problem_main {
  width: 100%;
  .main_item1 {
    width: 90%;
    line-height: 30px;
    margin-left: 5%;
    border-bottom: solid 2px #666;
    margin-bottom: 10px;
    p {
      font-size: 13px;
      color: #555;
      margin-left: 20px;
    }
    input {
      margin-left: 20px;
    }
  }
}
</style>
