<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>求购</span>
      <span></span>
    </div>
    <div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div>
      <div class="seekcell" v-for="(item, index) in seekdata" :key="index">
        <dl>
          <dt>
            <img :src="item.img" alt="" />
          </dt>
          <dd>{{ item.name }}</dd>
        </dl>
        <span>{{ item.create_time }}</span>
        <p class="p1">
          北京{{ item.area }}区{{ item.resident }}{{ item.subway
          }}{{ item.section }}{{ item.renovation }}室
        </p>
        <p class="p2">
          <span class="s1">意向区域：</span>
          <span class="s2">{{ item.area }}</span>
          <span class="s1">意向价格：</span>
          <span class="s3">{{ item.price }}.0/月</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
import { ref, computed, onMounted, toValue } from "vue";
import { useStore } from "vuex";
const store = useStore();
const value1 = ref(0);
const value2 = ref("a");
const option1 = [
  { text: "房屋类型", value: 0 },
  { text: "多层住宅", value: 1 },
  { text: "高层住宅", value: 2 },
  { text: "小高层住宅", value: 3 },
  { text: "商铺/门面房", value: 4 },
  { text: "厂房", value: 5 },
  { text: "写字楼", value: 6 },
  { text: "独院/别墅", value: 7 },
  { text: "车库", value: 8 },
];
const option2 = [
  { text: "区域选择", value: "a" },
  { text: "海淀区", value: "b" },
  { text: "朝阳区", value: "c" },
  { text: "丰台区", value: "d" },
  { text: "大兴区", value: "e" },
  { text: "延庆区", value: "f" },
  { text: "昌平区", value: "g" },
];
const seekdata = ref();
onMounted(() => {
  seekdata.value = toValue(computed(() => store.state.rend.renddata));
  // console.log(computed(() => store.state.rend.renddata));
});
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
.seekcell {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  line-height: 30px;
  dl {
    width: 200px;
    height: 50px;
    // border: solid 1px #000;
    display: flex;
    dd {
      // text-align: center;
      line-height: 50px;
      margin-left: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .p1 {
    width: 100%;
    font-size: 15px;
    margin-left: 5%;
  }
  .p2 {
    width: 90%;
    border-top: 1px solid #ccc;
    text-align: center;
    .s1 {
      font-size: 13px;
      color: #666;
      margin-left: 10px;
    }
    .s2 {
      font-size: 14px;
    }
    .s3 {
      font-size: 14px;
      color: rgb(255, 102, 0);
    }
  }
}
img {
  width: 50px;
  height: 50px;
}
</style>
