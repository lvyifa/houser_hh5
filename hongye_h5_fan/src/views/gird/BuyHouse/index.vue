<template>
  <div class="buyhouse">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>买 房</span>
      <span></span>
    </div>
    <div class="buyhouse_main">
      <div class="main_first">
        <span @click="defare" class="span1">
          {{ defarea }}<span class="san"></span>
        </span>
        <van-area
          title="地区选择"
          :area-list="areaList"
          @confirm="conarea"
          @cancel="delconarea"
          class="area"
          v-if="areaflag"
        />
        <span class="span2">
          <input
            type="text"
            placeholder="请在这里输入区域/商圈"
            v-model="input_value"
          />
          <van-icon name="search" @click="search_name" />
        </span>
        <span>
          <router-link to="/gird/findmap"> 地图找房 </router-link>
        </span>
      </div>
      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="(item, index) in gridlist" :key="index">
          <van-image :src="item.src" class="img_style" />
          <span>{{ item.text }}</span>
        </van-grid-item>
      </van-grid>
      <!-- 选择器 -->
      <div>
        <van-dropdown-menu ref="menuRef">
          <van-dropdown-item title="区域" ref="itemRef">
            <van-area
              title="地区选择"
              :area-list="areaList"
              @confirm="conarea1"
              @cancel="delconarea1"
              v-if="areflag"
            />
          </van-dropdown-item>
          <van-dropdown-item title="价格">
            (单位：万元)
            <nut-cell :style="{ padding: '40px 18px' }">
              <nut-range
                range
                v-model="valueprice"
                @change="onChange"
                max="10000"
                min="1000"
              ></nut-range>
            </nut-cell>
          </van-dropdown-item>
          <van-dropdown-item title="户型">
            <div class="item3">
              <h4>买房选型</h4>
              <van-radio-group v-model="checked" class="group">
                <van-radio
                  :name="index"
                  v-for="(item, index) in item3_data1"
                  :key="index"
                  >{{ item.text }}</van-radio
                >
              </van-radio-group>
            </div>

            <div class="item3">
              <h4>户型</h4>
              <van-radio-group v-model="checked1" class="group">
                <van-radio
                  :name="index"
                  v-for="(item, index) in item3_data2"
                  :key="index"
                  >{{ item.text }}</van-radio
                >
              </van-radio-group>
            </div>
            <div style="padding: 5px 16px">
              <van-button type="danger" block round @click="onConfirmgroup1">
                确认
              </van-button>
            </div>
          </van-dropdown-item>
          <van-dropdown-item title="筛选">
            <div class="item4">
              <h4>房源类型</h4>
              <van-radio-group v-model="checked2" class="group">
                <van-radio
                  :name="index"
                  v-for="(item, index) in item4_data1"
                  :key="index"
                  >{{ item.text }}</van-radio
                >
              </van-radio-group>
            </div>
            <div class="item4">
              <h4>验真情况</h4>
              <van-radio-group v-model="checked3" class="group">
                <van-radio
                  :name="index"
                  v-for="(item, index) in item4_data2"
                  :key="index"
                  >{{ item.text }}</van-radio
                >
              </van-radio-group>
            </div>
            <div class="item4">
              <h4>朝向</h4>
              <van-radio-group v-model="checked4" class="group">
                <van-radio
                  :name="index"
                  v-for="(item, index) in item4_data3"
                  :key="index"
                  >{{ item.text }}</van-radio
                >
              </van-radio-group>
            </div>
            <div style="padding: 5px 16px">
              <van-button type="danger" block round @click="onConfirmgroup2">
                确认
              </van-button>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>

      <div class="popular_main1">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <div v-if="renddata">
              <dl v-for="(item, index) in renddata" :key="index">
                <dt>
                  <img
                    :src="item.img"
                    alt=""
                    onerror="this.src='https://img1.baidu.com/it/u=3477470254,523159555&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'"
                  />
                </dt>
                <dd>
                  <p>
                    <b class="tit_b">{{ item.feature }} {{ item.name }}</b>
                  </p>
                  <p>
                    {{ item.extent }}平/{{ item.ll }}室 {{ item.renovation }} /
                    {{ item.area }}
                  </p>
                  <p>
                    <b class="prive_b">{{ item.price }}万</b>
                    <span class="price_s">12100元/m²</span>
                  </p>
                  <p>
                    <button>{{ item.subway }}</button>
                  </p>
                </dd>
              </dl>
            </div>
            <div v-else>
              <img
                src="https://hbimg.huabanimg.com/7695323ad7524d5d0e485bc32d80185ee8a2e348fab8-YQKqCE_fw658"
                alt=""
              />
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { areaList } from "@vant/area-data"; //获取地址数据
import { useStore } from "vuex";
import { ref, computed, onMounted, toValue } from "vue"; //ref
import { RendService } from "@/api/rend";
const onClickLeft = () => history.back(); //返回上一页
const defarea = ref("北京市"); //初始化地址
const areaflag = ref(false); //默认不显示地址选项
const menuRef = ref(); //组件设置
const itemRef = ref(null); //组件设置
const store = useStore();
const renservice = RendService();
const conarea = (value: any) => {
  //地区选择上边确认按钮
  console.log(value.selectedOptions[0].text);
  defarea.value = value.selectedOptions[0].text;
  areaflag.value = false;
};
const delconarea = (value: any) => {
  //地区选择上边取消按钮
  areaflag.value = false;
  defarea.value = "北京市";
};
const defare = () => {
  //点击地区显示
  areaflag.value = true;
};

const areflag = ref(true);
const area_secher = ref();
const conarea1 = (value: any) => {
  defarea.value = value.selectedOptions[0].text;
  menuRef.value.close();
  area_secher.value = value.selectedOptions[2].text;
  // console.log(value.selectedOptions[2].text);
  pass();
};

const pass = async () => {
  const stauts = await renservice.searchrend({
    area: area_secher.value,
  });
  console.log(stauts);
  if (stauts.code == 1) {
    renddata.value = stauts.data;
  }
};
const delconarea1 = (value: any) => {
  areflag.value = false;
};
const input_value = ref("");
const search_name = (value: any) => {
  console.log(input_value.value);
  pass_input();
};
const pass_input = async () => {
  const stauts = await renservice.searchrend({
    name: input_value.value,
  });
  // console.log(stauts);
  if (stauts.code == 1) {
    renddata.value = stauts.data;
  } else {
    renddata.value = "";
  }
};
const gridlist: any = [
  {
    src: "https://img2.baidu.com/it/u=2866877566,832002531&fm=253&fmt=auto&app=138&f=JPEG?w=256&h=256",
    text: "商铺",
    key: 0,
  },
  {
    src: "https://img1.baidu.com/it/u=2025920954,2911944699&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    text: "找写字楼",
    key: 1,
  },
  {
    src: "https://img0.baidu.com/it/u=3927669504,2196510705&fm=253&fmt=auto&app=138&f=JPG?w=400&h=300",
    text: "找小区",
    key: 2,
  },
];
//dropdown第二部分
const valueprice = ref([2000, 6666]);
const onChange = (valueprice: any) => {
  // showToast.text("当前值：" + valueprice);
  console.log(valueprice[0]);
};
// 请求后台价格接口
const passprice = async () => {
  const stauts = await renservice.searchrend({
    price: area_secher.value,
  });
};

//dropdown第三部分

const item3_data1 = ref([
  {
    text: "不限",
    color: "#ccc",
  },
  {
    text: "新房",
    color: "#ccc",
  },
  {
    text: "二手房",
    color: "#ccc",
  },
]);
const item3_data2 = ref([
  {
    text: "不限",
    color: "#ccc",
  },
  {
    text: "1室",
    color: "#ccc",
  },
  {
    text: "2室",
    color: "#ccc",
  },
  {
    text: "3室",
    color: "#ccc",
  },
  {
    text: "3室+",
    color: "#ccc",
  },
]);
const item4_data1 = ref([
  {
    text: "新房",
  },
  {
    text: "二手房",
  },
]);
const item4_data2 = ref([
  {
    text: "不限",
  },
  {
    text: "安选",
  },
]);
const item4_data3 = ref([
  {
    text: "东",
  },
  {
    text: "西",
  },
  {
    text: "南",
  },
  {
    text: "北",
  },
  {
    text: "南北",
  },
]);
const checked = ref<number>(0);
const checked1 = ref<number>(0);
const checked2 = ref<number>(0);
const checked3 = ref<number>(0);
const checked4 = ref<number>(0);
const onConfirmgroup1 = () => {
  menuRef.value.close();
  console.log(item3_data1.value[checked.value].text);
  console.log(item3_data2.value[checked1.value].text);
};
const onConfirmgroup2 = () => {
  menuRef.value.close();
  console.log(item4_data1.value[checked2.value].text);
  console.log(item4_data2.value[checked3.value].text);
  console.log(item4_data3.value[checked4.value].text);
};

//数据页面

const renddata = ref();
onMounted(() => {
  pass();
  renddata.value = toValue(computed(() => store.state.rend.renddata));
});
//上拉，下拉
const params = ref<any>({
  pageSize: 10,
  currentPage: 1,
});
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const onLoad = () => {
  let timer = setTimeout(() => {
    // 定时器仅针对本地数据渲染动画效果,项目中axios请求不需要定时器
    getRecordList(); // 调用上面方法,请求数据
    params.value.currentPage++; // 分页数加一
    clearTimeout(timer); //清除计时器
  }, 100);
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;
  renddata.value = toValue(computed(() => store.state.rend.renddata));
  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;

  onLoad();
};
//请求数据
const getRecordList = async () => {
  const res = await renservice.rend(params.value);

  // data.value = res.data;
  if (res.code == 1) {
    if (res.data.length == 0) {
      renddata.value = [];
      finished.value = true;
    }
    // 有数据 赋值列表 加载状态结束
    res.data.forEach((item: any) => renddata.value.push(item));
    loading.value = false;
    refreshing.value = false;
    // 如果list长度大于等于总数据条数，数据全部加载完成
    if (renddata.value.length >= res.data.total) {
      finished.value = true; //结束加载
    }
  } else {
    // showToast(res.msg);
    renddata.value = [];
  }
};
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
.main_first {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.san {
  width: 5px;
  height: 5px;
  border-top: solid 5px #666;
  border-left: solid 5px #fff;
  border-right: solid 5px #fff;
}
.span1 {
  display: flex;
  align-items: center;
}
.span2 {
  display: flex;
  align-items: center;
  background: rgb(244, 244, 244);
  border: 1px #666 solid;
  padding-right: 10px;
  input {
    height: 30px;
    background: rgb(244, 244, 244);
    border: 0;
    padding-left: 10px;
    font-size: 14px;
  }
}
.img_style {
  width: 50px;
  height: 50px;
}
.area {
  width: 350px;
  border: solid 1px #000;
  z-index: 666;
  position: absolute;
  top: 130px;
  left: 15px;
}
.item3 {
  margin-top: 10px;
  h4 {
    margin-bottom: 20px;
  }
  text-align: center;
  color: #666;
  .group {
    display: flex;
    justify-content: space-around;
  }
}
.item4 {
  text-align: center;
  color: #666;
  .group {
    display: flex;
    justify-content: space-around;
  }
}
.popular_main1 {
  width: 350px;
  height: 400px;
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
img {
  width: 100%;
  height: 100%;
}
</style>
