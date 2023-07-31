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
      <div
        class="bork_one"
        v-for="(item, index) in brokerListnav1"
        :key="index"
      >
        <div class="one_img">
          <img
            src="https://img0.baidu.com/it/u=1225042881,635800970&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
        </div>
        <span>NO.1</span>
        <p>{{ item.name }}</p>
      </div>

      <div
        class="bork_two"
        v-for="(item, index) in brokerListnav2"
        :key="index"
      >
        <div class="one_img">
          <img
            src="https://img0.baidu.com/it/u=1225042881,635800970&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
        </div>
        <span>NO.2</span>
        <p>{{ item.name }}</p>
      </div>

      <div
        class="bork_three"
        v-for="(item, index) in brokerListnav3"
        :key="index"
      >
        <div class="one_img">
          <img
            src="https://img0.baidu.com/it/u=1225042881,635800970&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
        </div>
        <span>NO.3</span>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="bork_main1">
      <div
        class="main1_item"
        v-for="(item, index) in brokerListbody"
        :key="index"
      >
        <dl>
          <dd>{{ index + 4 }}</dd>
          <dt>
            <img
              src="https://img0.baidu.com/it/u=1225042881,635800970&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
              alt=""
            />
          </dt>
          <dd>
            <p class="p1">{{ item.name }}</p>
            <p class="p2">{{ item.company }}</p>
          </dd>
        </dl>
        <div class="main1_button">
          <button class="b1">
            <van-icon name="chat" color="rgb(250,101,104)" />
          </button>
          <button class="b2">
            <van-icon name="phone" color="rgb(250,101,104)" />
          </button>
        </div>
      </div>
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
  background: #fff;
  left: 35%;
  top: 24%;
  border-radius: 10px 10px 0 0;
  text-align: center;
  padding-top: 10px;
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
  padding-top: 10px;
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
  padding-top: 10px;
}
.bork_main1 {
  width: 100%;
  height: 250px;
  border: solid 1px #000;
  overflow-y: scroll;
  margin-top: 10px;
  .main1_item {
    width: 90%;
    display: flex;
    height: 65px;
    // border: solid 1px #000;
    margin-top: 5px;
    margin-left: 18px;
    border-bottom: #ccc solid 1px;
  }
  dl {
    width: 50%;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    dt {
      width: 50px;
      height: 50px;
      margin-left: 10px;
    }
    dd {
      line-height: 20px;
      margin-left: 10px;
      .p1 {
        font-weight: 800;
      }
      .p2 {
        font-size: 12px;
        color: #666;
      }
    }
  }
  .main1_button {
    // width: 100px;
    button {
      border: 0;
      font-size: 30px;
      line-height: 50px;
      background: #ffffff;
      margin-left: 20px;
      margin-top: 5px;
      border-radius: 50%;
      background: rgb(254, 238, 237);
    }
    .b1 {
      width: 50px;
      height: 50px;
    }
    .b2 {
      width: 50px;
      height: 50px;
    }
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>
