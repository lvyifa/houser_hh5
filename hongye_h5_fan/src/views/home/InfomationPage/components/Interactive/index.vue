<template>
  <div class="inter">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>信息</span>
      <span> </span>
    </div>
    <div class="inter_main">
      <van-cell value="上午7:00" class="cell">
        <template #title>
          <dl>
            <dt>
              <img
                src="https://img0.baidu.com/it/u=142583684,3035502695&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt=""
              />
            </dt>
            <dd>
              <h4>一米阳光</h4>
              <p>您好，您发布的房子，我想具体资讯一下</p>
            </dd>
          </dl>
        </template>
      </van-cell>
      <van-cell value="上午7:00" class="cell">
        <template #title>
          <dl>
            <dt>
              <img
                src="https://img1.baidu.com/it/u=3404246338,3305899557&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt=""
              />
            </dt>
            <dd>
              <h4>安静</h4>
              <p>您好，您发布的房子，我想具体资讯一下</p>
            </dd>
          </dl>
        </template>
      </van-cell>
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
img {
  width: 50px;
  height: 50px;
}
.cell {
  width: 100%;
  border-bottom: 1px solid #000;
  dl {
    width: 250px;
    display: flex;
    align-items: center;
    dd {
      p {
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
