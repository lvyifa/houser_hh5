<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>经纪人</span>
      <span></span>
    </div>
    <div class="bork_main">
      <div class="bork_input">
        <van-icon name="search" color="#fff" />
        <input type="text" placeholder="请输入需要查询的经纪人" />
      </div>
      <div class="bork_one">
        <div class="one_img">
          <img
            src="https://img0.baidu.com/it/u=1225042881,635800970&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
        </div>
        <span>NO.1</span>
        <p>遗憾</p>
      </div>

      <div class="bork_two">
        <div class="one_img">
          <img
            src="https://img0.baidu.com/it/u=1225042881,635800970&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
        </div>
        <span>NO.2</span>
        <p>遗憾</p>
      </div>
      <div class="bork_three">
        <div class="one_img">
          <img
            src="https://img0.baidu.com/it/u=1225042881,635800970&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
        </div>
        <span>NO.3</span>
        <p>遗憾</p>
      </div>
    </div>
    <div class="bork_main1">
      <div>
        <dl>
          <dt>
            <img
              src="https://img0.baidu.com/it/u=1225042881,635800970&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
              alt=""
            />
          </dt>
          <dd></dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
</script>

<style lang="less" scoped>
.navbar {
  color: #ffffff;
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
.bork_main {
  width: 100%;
  height: 300px;
  background: rgb(255, 100, 105);
  position: relative;
}
.bork_input {
  .van-icon {
    margin-left: 10px;
    font-size: 30px;
    font-weight: 800;
    color: #ffffff;
  }
  input {
    margin-left: 10px;
    border: 0;
    background: rgb(255, 255, 255);
  }
  width: 80%;
  height: 30px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 225, 0.5);
  margin-left: 10%;
  border: #ffffff solid 1px;
}

.bork_one {
  position: absolute;
  width: 110px;
  height: 230px;
  background: #ffffff;
  left: 35%;
  top: 24%;
  border-radius: 10px 10px 0 0;
  text-align: center;
}
.bork_two {
  position: absolute;
  width: 110px;
  height: 170px;
  background: #ffffff;
  left: 5%;
  top: 44%;
  border-radius: 10px 10px 0 0;
  text-align: center;
}
.bork_three {
  position: absolute;
  width: 110px;
  height: 170px;
  background: #ffffff;
  left: 65%;
  top: 44%;
  border-radius: 10px 10px 0 0;
  text-align: center;
}
</style>
