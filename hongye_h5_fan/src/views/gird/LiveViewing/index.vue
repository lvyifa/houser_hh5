<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>直播看房</span>
      <span></span>
    </div>
    <div class="live_main">
      <van-tabs v-model:active="active" type="card">
        <van-tab v-for="(item1, index) in data" :key="index" :title="item1.tab">
          <dl v-for="(item, index) in livedata" :key="index">
            <dt>
              <img
                src="https://img0.baidu.com/it/u=4130429769,13353809&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500"
                alt=""
              />
            </dt>
            <dd>
              <h3>{{ item.title }}</h3>
              <p>
                <van-icon name="video" color="rgb(179,176,142)" />
                {{ item.create_time }}
              </p>
            </dd>
            <button class="dl_button">
              {{ item1.tab }}
            </button>
          </dl>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
import { onMounted, ref, computed } from "vue";

const active = ref(0);
const data = ref<any>([
  //定义tab的内容进行渲染
  { tab: "不限" },
  { tab: "正在直播" },
  { tab: "精彩回放" },
]);
import { useLiveService } from "@/api/live";
import { useStore } from "vuex";
const store = useStore();
const liveService = useLiveService();
const livedata = ref();
const getLiveList = async (
  pageCount?: number,
  IdName?: string | number,
  status?: number
) => {
  const stauts = await liveService.list({
    pageCount,
    IdName,
    status,
  });
  console.log(stauts);
  if (stauts.code == 200) {
    livedata.value = stauts.data;
  }
};

onMounted(() => {
  getLiveList();
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
.live_main {
  width: 100%;
  height: 585px;
  border: solid 1px #000;
  overflow-y: scroll;
  .van-tabs {
    width: 100%;
    height: 100%;
    .van-tabs__wrap {
      height: 70px;
    }
    .van-tabs__nav {
      border: 0;
      background: #fff;
    }
    .van-tab--card {
      border: 0;
    }
    .van-tab--active {
      border: solid 1px #f00;
      background: rgb(253, 242, 243);
    }
    .van-tab {
      // width: 20px;
      height: 30px;
      color: #000;
      margin-left: 10px;
      background: rgb(246, 246, 246);
      margin-top: 20px;
    }
  }
}
dl {
  width: 90%;
  height: 250px;
  border: solid 1px #000;
  margin-left: 5%;
  position: relative;
  dt {
    width: 100%;
    height: 190px;
  }
  dd {
    line-height: 30px;
  }
}
.dl_button {
  position: absolute;
  left: 7%;
  top: 13%;
  width: 100px;
  height: 30px;
  border: 0;
  background: rgb(127, 154, 226);
  border-radius: 50px;
  color: #fff;
}
img {
  width: 100%;
  height: 100%;
}
</style>
