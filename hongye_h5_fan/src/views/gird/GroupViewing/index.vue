<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>团购看房</span>
      <span></span>
    </div>
    <div class="group_main" v-for="(item, index) in groupdata" :key="index">
      <dl>
        <dt>
          <img
            :src="item.img"
            alt=""
            onerror="this.src='https://pic4.zhimg.com/v2-8bd0952ad1cdbe438a5d37ba80617c03_1440w.jpg?source=172ae18b'"
          />
        </dt>
        <dd>
          <h3>{{ item.house_name }}</h3>
          <p>{{ item.district }}</p>
          <p>
            <span>活动时间：</span><span>已报名:{{ item.id }}人</span>
          </p>
        </dd>
      </dl>
      <button class="status_button">我要报名</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
import { usegroupService } from "@/api/group";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const groupService = usegroupService();
const groupdata = ref();
const getBrokerList = async () => {
  const stauts = await groupService.group({
    province: "",
    city: "",
    area: "",
    initiator: "",
    group_status: "",
    address: "",
    status: "",
  });
  console.log(stauts);
  if (stauts.code == 200) {
    groupdata.value = stauts.data;
  }
};

onMounted(() => {
  getBrokerList();
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
