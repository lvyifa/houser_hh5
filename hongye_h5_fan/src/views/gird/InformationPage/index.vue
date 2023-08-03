<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>资讯</span>
      <span></span>
    </div>
    <div class="info_main" v-for="(item, index) in info_data" :key="index">
      <dl>
        <dt>
          <img
            src="https://img2.baidu.com/it/u=3121709377,2545185790&fm=253&fmt=auto&app=138&f=JPEG?w=717&h=500"
            alt=""
          />
        </dt>
        <dd>
          <p>{{ item.price }}万元{{ item.title }},谁家这么豪？</p>
          <p>{{ item.date }}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, toValue } from "vue";
import { infosService } from "@/api/infos";
import { useStore } from "vuex";
const onClickLeft = () => history.back();
const store = useStore();
const infService = infosService();
const search = async () => {
  const stat = await infService.infos({
    name: "",
    status: "",
  });
  console.log(stat);
  store.commit({ type: "infos/setinfoslist", payload: stat.data });
};

const info_data = ref();
onMounted(() => {
  search();
  info_data.value = toValue(computed(() => store.state.infos.infodata));
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
.info_main {
  dl {
    width: 90%;
    height: 100px;
    display: flex;
    margin-top: 20px;
    margin-left: 10px;
    // border: solid 1px #000;
    dt {
      width: 150px;
      height: 100px;
    }
    dd {
      line-height: 30px;
    }
  }
}
img {
  border-radius: 10px;

  width: 150px;
  height: 100px;
}
</style>
