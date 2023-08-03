<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span> {{ jjrdata.broker }}</span>
      <span></span>
    </div>
    <div class="liveexam_main">
      <p class="time">{{ datatime }}</p>

      <div class="chatList">
        <div v-for="(item, index) in replyList" :key="index">
          <div :class="item.type ? 'left' : 'right'">
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>

      <div class="itemfooter">
        <div class="textbox">
          <van-icon :size="20" name="volume-o" />
          <van-cell-group inset>
            <van-field
              v-model="value"
              @click="more = false"
              placeholder="说点什么吧.."
              @keydown="ask"
            />
          </van-cell-group>
          <van-icon :size="26" name="smile-o" @click="more = false" />
          <van-icon :size="25" name="add-o" @click="more = true" />
        </div>
        <div class="more" v-if="more">
          <van-grid :gutter="10" :column-num="4">
            <van-grid-item
              v-for="(item, index) in gridOption"
              :key="index"
              :icon="item.icon"
              :text="item.text"
            />
          </van-grid>
        </div>
        <div class="more" v-else><img src="./m3.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";
const onClickLeft = () => history.back();
import { ref, computed, onMounted, toValue } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useChatService } from "@/api/chat";
const store = useStore();
const route = useRoute();
const jjrdata = ref(computed(() => store.state.rend.renddetail));
const datatime = moment(new Date()).format("h:mm:ss a");
const chatService = useChatService();
const value = ref<string>("");
const more = ref(false);
interface replyType {
  type: number;
  text: string;
}
const replyList = ref<Array<replyType>>([]);
const gridOption = ref([
  {
    icon: "photo",
    text: "相册",
  },
  {
    icon: "photograph",
    text: "拍摄",
  },
  {
    icon: "https://oss-study-yzx.oss-cn-beijing.aliyuncs.com/video.jpg",
    text: "视频通话",
  },
  {
    icon: "location",
    text: "位置",
  },
  {
    icon: "https://oss-study-yzx.oss-cn-beijing.aliyuncs.com/voice.jpg",
    text: "语音输入",
  },
]);
const getChat = async (value: string) => {
  let res = await chatService.chat({
    prompt: value,
    model: "text-davinci-003",
  });
  // console.log(res);
  replyList.value.push({ type: 1, text: res.result });
};
const ask = (keyboard: any) => {
  if (keyboard.keyCode == 13) {
    replyList.value.push({ type: 0, text: value.value });
    getChat(value.value);
    value.value = "";
  }
};
onMounted(() => {
  console.log(jjrdata.value);
  replyList.value.push({ type: 1, text: "客服连线中，请稍等..." });
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
.liveexam_main {
  width: 100%;
  height: 80vh;
  position: relative;
  .time {
    text-align: center;
    margin-top: 10px;
  }
  .m2 {
    width: 100%;
    height: 110px;
  }
  .chatList {
    margin-top: 120px;
    padding: 10px;
    .left {
      text-align-last: left;
      p {
        max-width: 250px;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 5px;
      }
    }
    .right {
      text-align: right;
      p {
        float: right;
        border: 1px solid #66cc33;
        background-color: #66cc33;
        padding: 10px;
        border-radius: 5px;
      }
    }
  }
  .itemfooter {
    position: absolute;
    width: 100%;
    height: 300px;
    border-top: 1px solid rgb(220, 218, 218);
    bottom: -2.875rem;
    .textbox {
      border: 2px solid #eee;
      background-color: #f1f1f1;
      padding: 0 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .van-field {
        width: 220px;
      }
    }
    .more {
      width: 100%;
      height: 15.375rem;
      img {
        width: 100%;
        height: 100%;
      }
      margin-top: 10px;
    }
  }
}
</style>
