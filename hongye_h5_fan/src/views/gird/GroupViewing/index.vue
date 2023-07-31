<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>团购看房</span>
      <span></span>
    </div>
    <div class="group_main">
      <dl>
        <dt>
          <img
            src="https://img0.baidu.com/it/u=1691284005,1744769400&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
        </dt>
        <dd>
          <h3>123</h3>
          <p>456</p>
          <p><span>活动时间：</span><span>已报名:人</span></p>
        </dd>
      </dl>
      <button class="status_button">我要报名</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
import { ref, onMounted, computed } from "vue";
import { BrokerManageType } from "@/interface/model/broker";
import { useBrokerService } from "@/api/broker";
import { useStore } from "vuex";
const store = useStore();
const brokerList = ref();
const brokerListnav1 = ref();
const brokerListnav2 = ref();
const brokerListnav3 = ref();
const brokerListbody = ref();
const BrokerService = useBrokerService();
const getBrokerList = async (params: BrokerManageType.BrokerSearch) => {
  let res = await BrokerService.list(params);
  console.log(res);
  brokerList.value = res.data;
  brokerListnav1.value = res.data
    .sort((a: any, b: any) => {
      return a.renting - b.renting;
    })
    .splice(0, 1);
  brokerListnav2.value = res.data
    .sort((a: any, b: any) => {
      return a.renting - b.renting;
    })
    .splice(0, 2);
  brokerListnav3.value = res.data
    .sort((a: any, b: any) => {
      return a.renting - b.renting;
    })
    .splice(0, 3);
  brokerListbody.value = res.data
    .sort((a: any, b: any) => {
      return a.renting - b.renting;
    })
    .splice(4, res.data.length - 3);
};

onMounted(() => {
  getBrokerList({});
  // console.log(brokerListnav1);
});
</script>

<style lang="less" setup>
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
.group_main {
  width: 100%;
  height: 300px;
  position: relative;
  dl {
    margin: 20px 20px;
    width: 90%;
    dt {
      width: 100%;
      height: 200px;
    }
  }
  .status_button {
    width: 120px;
    height: 40px;
    border-radius: 50px;
    position: absolute;
    left: 10%;
    top: 5%;
    border: 0;
    background: rgb(251, 152, 104);
    font-weight: 800;
    color: #fff;
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>
