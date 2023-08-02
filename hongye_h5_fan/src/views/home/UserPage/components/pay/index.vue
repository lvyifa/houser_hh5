<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>支付明细</span>
      <span></span>
    </div>
    <div class="pay_main">
      <div class="pay_one">
        <h5>2021年1月 <van-icon name="arrow-down" /></h5>
        <p>支出￥1917.61</p>
      </div>
      <div class="pay_two">
        <div class="two_item">
          <dl>
            <dt>
              <img
                src="https://p0.itc.cn/q_70/images03/20211214/29f81612389e422baba1d7d3a7136cbd.jpeg"
                alt=""
              />
            </dt>
            <dd>
              <p>微信支付 宏业找房</p>
              <p>1月11日 12:16</p>
            </dd>
          </dl>
          <span> -10.00 </span>
        </div>
        <div class="two_item">
          <dl>
            <dt>
              <img
                src="https://p0.itc.cn/q_70/images03/20211214/29f81612389e422baba1d7d3a7136cbd.jpeg"
                alt=""
              />
            </dt>
            <dd>
              <p>微信支付 宏业找房</p>
              <p>1月12日 12:16</p>
            </dd>
          </dl>
          <span> -20.00 </span>
        </div>
      </div>
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
.pay_one {
  padding-left: 20px;
  font-weight: 800;
  font-size: 25px;
  background: #ccc;
  p {
    font-size: 15px;
    color: #666;
  }
}
.pay_two {
  width: 100%;
  .two_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    dl {
      display: flex;
      dt {
        width: 50px;
        height: 50px;
      }
    }
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>
