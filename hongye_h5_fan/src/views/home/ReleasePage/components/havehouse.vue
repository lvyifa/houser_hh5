<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>有房出租</span>
      <span></span>
    </div>
    <van-notice-bar
      color="#f00"
      background="rgb(248,225,231)"
      left-icon="info-o"
    >
      发布本条信息将收费10.0元
    </van-notice-bar>
    <div class="file">
      <dl>
        <dt>
          <van-uploader :after-read="afterRead" />
        </dt>
        <dd>
          <b>上传图片</b>
          <p>
            只能上传房屋图片,不能包含文字、数字、网址、名字、水印等,所有类别图片共计20张。
          </p>
        </dd>
      </dl>
      <span>&gt;</span>
    </div>
    <div class="from_main1">
      <div class="from_item1">
        <div class="item1">
          <p>小区</p>
          <input type="text" placeholder="请选择小区" />
        </div>
        <span>&gt;</span>
      </div>
      <div class="from_item1">
        <div class="item1">
          <p>房产类型</p>
          <input type="text" placeholder="请选择" />
        </div>
        <span>&gt;</span>
      </div>
      <div class="from_item1_">
        <div class="item1">
          <p>区域</p>
          <input type="text" placeholder="请选择" />
        </div>
        <span>&gt;</span>
      </div>
    </div>
    <div class="from_main2">
      <div class="from_item2">
        <div class="item">
          <p>户型 | 朝向 | 装修</p>
          <input type="text" placeholder="请选择" />
        </div>
        <span>&gt;</span>
      </div>
      <div class="from_item2_">
        <div class="item">
          <p>
            <span @touchstart.stop="show = true">
              所在楼层 <input type="text" placeholder="请填写" /> 层
            </span>
            <span @touchstart.stop="show = true">
              共<input type="text" placeholder="请填写" /> 层
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="from_main3">
      <div class="from_item" @touchstart.stop="show = true">
        <div class="item">
          <p>面积</p>
          <input type="text" placeholder="请输入" />
        </div>
        <span>m²</span>
      </div>
      <div class="from_item_" @touchstart.stop="show = true">
        <div class="item">
          <p>售价</p>
          <input type="text" placeholder="请输入" />
        </div>
        <span>万元</span>
      </div>
    </div>
    <div class="from_main4">
      <p class="ptitle">标签</p>
      <p class="p1">
        <van-button type="default">新上房源</van-button>
        <van-button type="default">小户型</van-button>
        <van-button type="default">有电梯</van-button>
        <van-button type="default">优质教育</van-button>
      </p>
      <div class="div1">
        <van-button
          type="default"
          v-for="(item, index) in titdata"
          :key="index"
          >{{ item.tit }}</van-button
        >
      </div>
    </div>
    <div class="from_main5">
      <div class="from_item">
        <div class="item">
          <p>标题</p>
          <input type="text" placeholder="请输入" />
        </div>
        <span>&gt;</span>
      </div>
      <div class="from_item">
        <div class="item">
          <p>描述</p>
          <input type="text" placeholder="请输入" />
        </div>
        <span>&gt;</span>
      </div>
      <div class="from_item">
        <div class="item">
          <p>联系人</p>
          <input type="text" placeholder="请输入" />
        </div>
        <span>&gt;</span>
      </div>
      <div class="from_item">
        <div class="item">
          <p>联系电话</p>
          <input type="text" placeholder="请输入" />
        </div>
        <span>&gt;</span>
      </div>
      <div class="from_item_">
        <div class="item">
          <p>有效时间</p>
          <van-button type="default" class="main5_button">30天</van-button>
        </div>
      </div>
    </div>
    <div class="from_main6">
      <van-checkbox-group v-model="checked" shape="square" checked-color="#f00">
        <van-checkbox name="a">
          已阅读并接受《宏烨找房网房源信息发布规则》
        </van-checkbox>
      </van-checkbox-group>
      <van-button
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        @click="showPopup"
        @touchstart.stop="show = true"
      >
        发布并支付
      </van-button>

      <van-number-keyboard
        :show="show"
        title="键盘标题"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
      />
      <van-popup v-model:show="showCenter" round :style="{ padding: '64px' }" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
import { showToast } from "vant";
import { ref } from "vue";
const afterRead = (file: any) => {
  console.log(file);
};
const titdata = ref([
  {
    tit: "低房价",
  },
  {
    tit: "满两年",
  },
  {
    tit: "满五年",
  },
  {
    tit: "随时看房",
  },
  {
    tit: "满五唯一",
  },
  {
    tit: "低首付",
  },
  {
    tit: "两室朝阳",
  },
  {
    tit: "精装",
  },
  {
    tit: "南北通透",
  },
  {
    tit: "品质小区",
  },
]);

const checked = ref(["a", "b"]);
const showCenter = ref(false);
const showPopup = () => {
  showCenter.value = true;
};
const show = ref(false);
const onInput = (value: any) => showToast(value);
const onDelete = () => showToast("删除");
</script>

<style lang="less">
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
.file {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  border-bottom: 10px rgb(251, 247, 248) solid;
  dl {
    width: 80%;
    display: flex;
    dd {
      line-height: 20px;
      p {
        font-size: 12px;
      }
    }
  }
}
.from_main1 {
  width: 100%;
  height: 190px;
  margin-top: 10px;
  border-bottom: 10px rgb(251, 247, 248) solid;
  .from_item1 {
    width: 90%;
    margin-left: 5%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: #666 solid 1px;
    padding-bottom: 5px;
    input {
      border: 0;
    }
    .item1 {
      p {
        font-size: 12px;
        color: #666;
        margin-bottom: 8px;
      }
    }
  }
  .from_item1_ {
    width: 90%;
    margin-left: 5%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
    input {
      border: 0;
    }
    .item1 {
      p {
        font-size: 12px;
        color: #666;
        margin-bottom: 8px;
      }
    }
  }
}
.from_main2 {
  width: 100%;
  height: 120px;
  margin-top: 10px;
  border-bottom: 10px rgb(251, 247, 248) solid;
  .from_item2 {
    width: 90%;
    margin-left: 5%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: #666 solid 1px;
    padding-bottom: 5px;
    input {
      border: 0;
      padding-top: 10px;
    }
    .item {
      p {
        font-size: 12px;
        color: #666;
        margin-bottom: 8px;
      }
    }
  }
  .from_item2_ {
    width: 90%;
    margin-left: 5%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
    input {
      border: 0;
      width: 80px;
      border-bottom: solid 1px #000;
    }
    .item_ {
      font-size: 15px;
      p {
        font-size: 12px;
        color: #666;
        margin-bottom: 8px;
      }
    }
  }
}
.from_main3 {
  width: 100%;
  height: 120px;
  margin-top: 10px;
  border-bottom: 10px rgb(251, 247, 248) solid;
  .from_item {
    width: 90%;
    margin-left: 5%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: #666 solid 1px;
    padding-bottom: 10px;
    color: #ccc;
    input {
      border: 0;
      padding-top: 10px;
    }
    .item {
      p {
        font-size: 12px;
        color: #666;
        margin-bottom: 8px;
      }
    }
  }
  .from_item_ {
    width: 90%;
    margin-left: 5%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
    color: #ccc;
    input {
      border: 0;
    }
    .item {
      p {
        font-size: 12px;
        color: #666;
        margin-bottom: 8px;
      }
    }
  }
}
.from_main4 {
  width: 100%;
  height: 200px;
  border-bottom: 10px rgb(251, 247, 248) solid;
  .ptitle {
    font-size: 14px;
    color: #555;
    margin-left: 35px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .p1 {
    .van-button {
      padding: 10px;
      margin-left: 20px;
    }
  }
  .div1 {
    margin-top: 10px;
    .van-button {
      width: 80px;
      height: 30px;
      font-size: 8px;
      margin-left: 5px;
      margin-top: 5px;
    }
  }
}
.from_main5 {
  width: 100%;
  height: 350px;
  margin-top: 10px;
  border-bottom: 10px rgb(251, 247, 248) solid;
  .from_item {
    width: 90%;
    margin-left: 5%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: #666 solid 1px;
    padding-bottom: 5px;
    input {
      border: 0;
    }
    .item {
      p {
        font-size: 12px;
        color: #666;
        margin-bottom: 8px;
      }
    }
  }
  .from_item_ {
    width: 90%;
    margin-left: 5%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
    margin-top: 10px;
    input {
      border: 0;
    }
    .item {
      p {
        font-size: 12px;
        color: #666;
        margin-bottom: 8px;
      }
    }
    .main5_button {
      width: 80px;
      height: 50px;
    }
  }
}
.from_main6 {
  margin-top: 10px;
  width: 90%;
  height: 200px;
  margin-left: 5%;
  background: rgb(247, 247, 247);
  .van-checkbox {
    font-size: 11px;
    margin-left: 30px;
    padding-top: 20px;
  }
  .van-button {
    width: 300px;
    margin-top: 50px;
    margin-left: 5%;
    border-radius: 50px;
  }
}
</style>
