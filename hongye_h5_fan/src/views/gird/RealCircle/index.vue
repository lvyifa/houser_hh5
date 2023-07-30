<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>楼市圈</span>
      <span></span>
    </div>
    <div class="real_main" v-for="(item, index) in realdata" :key="index">
      <van-cell>
        <template #title>
          <dl>
            <dt>
              <img
                src="https://img0.baidu.com/it/u=3837802730,3131724349&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt=""
              />
            </dt>
            <dd class="d1">
              <p>
                {{ item.pp }}--{{ item.jjr
                }}<van-icon name="like" color="red" />
              </p>
              <p>{{ item.pp }}--{{ item.xq }}</p>
            </dd>
            <dd class="d2">
              <button>在线咨询</button><button>拨打电话</button>
            </dd>
          </dl>
        </template>
      </van-cell>
      <div class="realmain_2">
        <div class="real_left">
          <b>{{ item.created_at }}</b>
        </div>
        <div class="real_right">
          <p>{{ item.lz }}</p>
          <img
            :src="item.img"
            alt=""
            onerror="this.src='https://img1.baidu.com/it/u=3477470254,523159555&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, toValue } from "vue"; //ref
import { useStore } from "vuex";
const onClickLeft = () => history.back();
const store = useStore();
const realdata = ref();
onMounted(() => {
  realdata.value = toValue(computed(() => store.state.rend.renddata));
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
.real_main {
  dl {
    display: flex;
    align-items: center;
    // border: solid 1px #000;
  }
  dt {
    width: 50px;
    height: 50px;
  }
  .d1 {
    display: flex;
    flex-wrap: wrap;
  }
  .d2 {
    display: flex;
  }
  dd {
    margin-left: 10px;
    button {
      width: 80px;
      margin-left: 10px;
      color: rgb(239, 167, 176);
      background: #fff;
      font-weight: 800;
      border: solid 2px rgb(239, 167, 176);
      padding: 5px;
      border-radius: 5px;
    }
  }
}
.realmain_2 {
  display: flex;

  margin-left: 20px;
  .real_left {
    width: 22%;
    height: 200px;
    // background: #ff0;
  }

  .real_right {
    margin-left: 10px;
    width: 75%;
    height: 200px;
    // background: #f00;
    img {
      margin-top: 10px;
      width: 80%;
      height: 80%;
    }
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>
