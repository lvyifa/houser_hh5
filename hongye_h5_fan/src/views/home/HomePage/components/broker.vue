<template>
  <!-- 经纪人 -->
  <div class="bro">
    <div class="broker_nav">
      <b>经纪人</b>
      <router-link to="/gird/broker">
        <span>更多</span>
      </router-link>
    </div>
    <div class="broker_main1">
      <div
        class="broker1_item"
        v-for="(item, index) in brokerList"
        :key="index"
      >
        <img
          src="https://img0.baidu.com/it/u=3933679416,2228485248&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          alt=""
        />
        <b>{{ item.name }}</b>
        <p>{{ item.company }} · {{ item.name }}</p>
        <router-link to="/gird/broker" class="router_brok">
          <van-button round color="linear-gradient(to right, #ff6034, #ee0a24)">
            <van-icon size="12" name="chat-o" />
            <span>咨询</span>
          </van-button>
        </router-link>
      </div>
      <!-- <div class="broker_item">456</div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BrokerManageType } from "@/interface/model/broker";
import { useBrokerService } from "@/api/broker";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
const store = useStore();
const brokerList = ref();
const BrokerService = useBrokerService();
const getBrokerList = async (params: BrokerManageType.BrokerSearch) => {
  let res = await BrokerService.list({
    currentPage: 1,
    pageSize: 20,
  });
  console.log(res);
  store.commit({ type: "broker/borklist", payload: res.data });
  brokerList.value = res.data;
};
onMounted(() => {
  getBrokerList({});
});
</script>

<style lang="less" scoped>
.broker_nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  b {
    font-size: 23px;
  }
  span {
    color: #666;
    font-size: 15px;
  }
}
.broker_main1 {
  width: 100%;
  height: 200px;
  display: flex;
  overflow-x: scroll;
}
.broker1_item {
  width: 300px !important;
  height: 200px;
  border: 1px solid #000;
  text-align: center;
  font-size: 12px;
  margin-left: 20px;
  img {
    width: 50px;
    height: 50px;
  }
}
.fff {
  font-size: 12px;
}
.router_brok {
  width: 300px;
  font-size: 10px;
  van-button {
    width: 200px;
  }
}
</style>
