<template>
  <div>
    <div class="popular_nav">
      <b>热门楼盘</b>
      <router-link to="/gird/buyhouse">
        <span>更多</span>
      </router-link>
    </div>
    <div class="popular_main">
      <dl
        v-for="(item, index) in renddata"
        :key="index"
        @click="godetail(item)"
      >
        <dt>
          <img
            :src="item.img"
            alt=""
            onerror="this.src='https://img1.baidu.com/it/u=3477470254,523159555&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'"
          />
        </dt>
        <dd>
          <p>
            <b class="tit_b">{{ item.xq }} {{ item.name }}</b>
          </p>
          <p>
            {{ item.mianji }}平/{{ item.ll }}室 {{ item.fangxing }} /
            {{ item.quyu }}
          </p>
          <p>
            <b class="prive_b">{{ item.jiage }}万</b>
            <span class="price_s">12100元/m²</span>
          </p>
          <p>
            <button>{{ item.lz }}</button>
          </p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RendService } from "@/api/rend";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import { RendManageType } from "@/interface/model/rend";
import { useRouter } from "vue-router";
import { toValue } from "vue";
const store = useStore();
const Rendservice = RendService();
const router = useRouter();
const renddata = ref<Array<RendManageType.renddataState>>([]);
const pass = async () => {
  const stauts = await Rendservice.rend({
    name: "",
    area: "",
  });
  console.log(stauts);
  if (stauts.code == 200) {
    renddata.value = stauts.data;
    store.commit({ type: "rend/getrendlist", payload: stauts.data });
  }
};
const godetail = (item: RendManageType.renddataState) => {
  store.commit({ type: "rend/detailrendlist", payload: toValue(item) });
  router.push("/renddetail");
};

onMounted(() => {
  pass();
});
</script>

<style lang="less" scoped>
.popular_nav {
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
.popular_main {
  width: 350px;
  height: 500px;
  // border: solid 1px #f00;
  border-bottom: 1px solid #f00;
  margin: 0 auto;
  overflow-y: scroll;
  dl {
    display: flex;
    width: 100%;
    height: 100px;
    margin-top: 20px;
    dt {
      width: 120px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    dd {
      width: 200px;
      margin-left: 10px;
      line-height: 24px;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .tit_b {
          font-size: 17px;
        }
        .prive_b {
          color: rgb(255, 153, 0);
        }
        .price_s {
          font-size: 14px;
          color: #666;
        }
        button {
          border: 0;
          width: 50px;
          background: #ccc;
          opacity: 0.8;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
