<template>
  <div>
    <div class="rendil_nav">
      <dl>
        <dt>
          <img :src="rendil.img" alt="" />
          <span @click="onClickLeft" class="back">&lt;</span>
        </dt>
        <dd>
          <p>
            {{ rendil.name }}{{ rendil.fangxing }}{{ rendil.jiage }}万{{
              rendil.mianji
            }}m²
          </p>
          <p class="dl_red">
            <b>{{ rendil.jiage }}</b
            >万
            <b>{{ rendil.fangxing }}</b>
            <b>{{ rendil.mianji }}</b> m²
          </p>
        </dd>
      </dl>
    </div>
    <div class="rendil_main">
      <div class="main_one">
        <h3>房源信息</h3>
        <van-grid :border="false" :column-num="3">
          <van-grid-item>
            <span>单价</span>
            <p>{{ rendil.jiage }}元/m²</p>
          </van-grid-item>
          <van-grid-item>
            <span>朝向</span>
            <p>{{ rendil.cx }}</p>
          </van-grid-item>
          <van-grid-item>
            <span>装修</span>
            <p>{{ rendil.zx }}</p>
          </van-grid-item>
          <van-grid-item>
            <span>楼层</span>
            <p>{{ rendil.lz }}/共{{ rendil.ll }}层</p>
          </van-grid-item>
          <van-grid-item>
            <span>类型</span>
            <p>{{ rendil.lx }}</p>
          </van-grid-item>
          <van-grid-item>
            <span>更新</span>
            <p>{{ rendil.zq }}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="main_two">
        <h3>房源特色</h3>
        <div>
          <b>核心卖点</b>
          <p>
            原始装修 三室两厅一卫 客厅朝阳两卧室朝阳楼层好 苏外名额没用 各出各税
          </p>
        </div>
        <div>
          <b>业主心态</b>
          <p>
            业主诚心出售此房，积极配合看房和达成协议后的各项手续。产权清晰无纠纷，看房方便，房主诚意出售
          </p>
        </div>
        <div>
          <b>服务介绍</b>
          <div>
            <p>我从事房产工作已有多年，经验丰富。</p>
            <ol>
              <li>能够精准的根据每一位客户的详细需求匹配到性价比合适的</li>
              <li>和业主议价是我的强项，让每位客户真正的省钱</li>
              <li>我们的服务能让您物超所值</li>
              <li>您的买房安家之旅，让您更加 安心 放心 省心</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="main_three">
        <p class="p1"><b>宿迁壁挂园</b><span>小区详情 &gt;</span></p>
        <dl>
          <dt>
            <img
              src="https://img2.baidu.com/it/u=1857691918,2300058039&fm=253&fmt=auto&app=138&f=JPEG?w=747&h=500"
              alt=""
            />
          </dt>
          <dd>
            <p>
              <span>参 考 均 价:</span><b>{{ rendil.jiage }}</b
              >元/m²
            </p>
            <p><span>比 上 月:</span> 持平</p>
            <p><span>小 区 地 址:</span>{{ rendil.xq }}</p>
          </dd>
        </dl>
        <p class="p2">查看同小区1套在售房源&gt;</p>
      </div>
      <div class="main_four">
        <h3>参考月贷</h3>
        <div class="loan">
          <van-tabs v-model:active="active">
            <van-tab title="等额本息">
              <div class="repayment">月供<span>￥</span>（30年）</div>
              <van-divider
                :style="{
                  color: '#000',
                }"
                :hairline="false"
              />
              <van-grid :column-num="4">
                <van-grid-item v-for="(item, index) in loanOption" :key="index">
                  <p class="head">{{ item.text }}</p>
                  <p class="loan-content">{{ item.value }}</p>
                </van-grid-item>
              </van-grid>
            </van-tab>
            <van-tab title="等额本金">等额本金</van-tab>
          </van-tabs>
        </div>
      </div>
      <div class="main_five">
        <h3>位置及周边</h3>
        <div ref="mapRef" class="map-wraper"></div>
      </div>
    </div>
    <van-action-bar class="footer_bar">
      <van-action-bar-icon
        icon="chat-o"
        :text="rendil.jjr"
        @click="onClickIcon"
      />
      <van-action-bar-icon icon="star-o" text="收藏" @click="onClickIcon" />
      <van-action-bar-button
        type="warning"
        text="在线咨询"
        @click="onClickButton"
      />
      <van-action-bar-button
        type="danger"
        text="电话咨询"
        @click="ontelButton"
      />
    </van-action-bar>
  </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
import { ref, computed, onMounted, toValue } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const rendil = ref<any>(toValue(computed(() => store.state.rend.renddetail)));
const active = ref(0);
const price = parseFloat((rendil.value.jiage / 100).toFixed(2));
//首付
const pay = parseFloat((price * 0.3).toFixed(2));
// 贷款
const loan = parseFloat((price - pay).toFixed(2));
// 利率
const rate = 0.0025294;
// 利息
const interest = parseFloat((loan * rate * 12 * 30).toFixed(2));
const loanOption = [
  { text: "总价", value: price + "万" },
  { text: "首付", value: pay + "万" },
  { text: "贷款", value: loan + "万(3成)" },
  {
    text: "利息",
    value: interest + "万",
  },
];
const onClickIcon = () => {
  console.log(111);
};
const onClickButton = () => {
  console.log(122);
};
const ontelButton = () => {
  router.push("/renddetailtel");
};
const BMapGL = window.BMapGL;
const mapRef = ref();
onMounted(() => {
  // rendil.value = toValue(computed(() => store.state.rend.renddetail));
  // console.log(rendil.value);
  const map = new BMapGL.Map(mapRef.value);
  const point = new BMapGL.Point(116.404, 39.915);
  map.centerAndZoom(point, 10);

  var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
  map.addControl(scaleCtrl);
  var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
  map.addControl(zoomCtrl);
});
</script>

<style lang="less" scoped>
.rendil_nav {
  width: 100%;
  position: relative;
  dl {
    width: 100%;
    height: 320px;
    border: solid 1px #000;
    dd {
      line-height: 30px;
      margin-left: 20px;
      .dl_red {
        color: rgb(240, 110, 126);
        b {
          padding-left: 5px;
        }
      }
    }
  }
}
.rendil_main {
  width: 100%;
  h3 {
    margin-left: 20px;
  }
  .main_one {
    border-bottom: solid 1px #ccc;
    .van-grid {
      span {
        font-size: 13px;
        color: #ccc;
      }
    }
  }
  .main_two {
    width: 100%;
    height: 500px;
    border: solid 1px #000;
    line-height: 30px;
    b {
      margin-left: 25px;
      padding-left: 2px;
      border-left: 5px solid #f00;
    }
    p {
      margin-left: 25px;
      font-size: 14px;
      color: rgb(133, 132, 132);
    }
    ol {
      list-style-type: none;
      counter-reset: sectioncounter;
      margin-left: 20px;
      font-size: 14px;
      color: rgb(143, 143, 143);
    }
    ol li:before {
      content: counter(sectioncounter) "、";
      counter-increment: sectioncounter;
    }
  }
  .main_three {
    width: 90%;
    height: 150px;
    margin-left: 5%;
    dl {
      width: 100%;
      height: 90px;
      display: flex;
      dd {
        line-height: 25px;
        margin-left: 20px;
        p {
          span {
            color: #666;
            font-size: 15px;
          }
          b {
            color: #f00;
          }
        }
      }
      dt {
        width: 80px;
        height: 80px;
      }
    }
    .p1 {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 14px;
        color: #666;
      }
    }
    .p2 {
      text-align: center;
      color: rgb(216, 146, 154);
    }
  }
  .main_four {
    width: 90%;
    .loan {
      width: 350px;
      height: 200px;
      margin: 0 auto;
      border: solid 1px #000;
      border-radius: 10px;
      margin-top: 20px;
      background: #fff;
      margin-left: 12px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      .van-tabs {
        margin-top: 10px;
        .van-tabs__wrap {
          .van-tabs__nav {
            background: #f00;
          }
          #van-tabs-1-0 {
            background: #f00;
          }
          .van-tab--active {
            background: #f00;
          }
        }
      }
    }
    .repayment {
      width: 100%;
      text-align: center;
      line-height: 20px;
      color: #666;
      font-size: 12px;
      span {
        font-weight: bold;
        color: #000;
      }
    }
    .head {
      color: #666;
    }
    .loan-content {
      width: 50px;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .main_five {
    width: 100%;
    height: 210px;
    border-bottom: solid 1px #000;
    margin-bottom: 100px;
    .map-wraper {
      width: 100%;
      height: 200px;
    }
  }
}
.back {
  display: inline-block;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0.8;
  width: 50px;
  font-size: 30px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  border-radius: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 888;
}

img {
  width: 100%;
  height: 100%;
}
.footer_bar {
  z-index: 999;
}
</style>
