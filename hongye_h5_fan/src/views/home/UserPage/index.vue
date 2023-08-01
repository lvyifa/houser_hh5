<template>
  <div>
    <div class="user_header">
      <span>我 的</span>
    </div>
    <div class="round"></div>
    <div class="user_card">
      <div class="card_header">
        <van-image
          round
          width="5rem"
          height="5rem"
          src="https://img0.baidu.com/it/u=1371020028,2133647628&fm=253&fmt=auto&app=120&f=JPEG?w=802&h=800"
        />
        <div>
          <h3>梦想^_^</h3>
          <p>15217287384</p>
        </div>
        <van-badge :content="5">
          <van-icon name="gem" color="#2491FA" size="24" />
        </van-badge>
      </div>
      <van-grid :column-num="3">
        <van-grid-item v-for="(item, index) in myChat" :key="index">
          <router-link :to="item.path">
            <van-image
              width="2rem"
              height="2rem"
              :src="item.img"
              class="header_img"
            />
            <p>{{ item.title }}</p>
          </router-link>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="user_list">
      <van-space
        direction="vertical"
        fill
        v-for="(item, index) in myList"
        :key="index"
      >
        <router-link :to="item.path">
          <van-cell :title="item.title" is-link class="list_item" />
        </router-link>
      </van-space>
    </div>
    <div class="sign-out">
      <van-button
        round
        type="primary"
        size="large"
        color="#FF666E"
        @click="backsub"
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const myChat = [
  {
    title: "我的发布",
    name: "我的发布",
    img: "https://img0.baidu.com/it/u=3533273121,671311756&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501",
    path: "/home/user/publish",
  },
  {
    title: "收藏",
    name: "收藏",
    img: "https://img1.baidu.com/it/u=391496771,2152901251&fm=253&fmt=auto&app=138&f=PNG?w=350&h=350",
    path: "/home/user/collect",
  },
  {
    title: "浏览历史",
    name: "浏览历史",
    img: "https://img2.baidu.com/it/u=3612205514,1590531421&fm=253&fmt=auto&app=138&f=JPEG?w=579&h=500",
    path: "/home/user/history",
  },
];
const myList = [
  {
    title: "支付明细",
    name: "Pay",
    path: "/home/user/pay",
  },
  {
    title: "问题反馈",
    name: "Question",
    path: "/home/user/problem",
  },
  {
    title: "联系客服",
    name: "Service",
    path: "/renddetailtel",
  },
];
const backsub = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("MIAO_LID");
  window.location.href = "/login";
};
</script>

<style lang="less" scoped>
.user_header {
  color: #fff;
  width: 100%;
  height: 200px;
  text-align: center;
  background: rgb(25, 135, 246);
  position: relative;
  span {
    display: inline-block;
    font-size: 22px;
    padding-top: 20px;
  }
}

.round {
  width: 100%;
  height: 80px;
  line-height: 20px;
  border-radius: 50% 50% 0 0;
  background-color: #fff;
  position: absolute;
  top: 150px;
  left: 0px;
}
.user_card {
  width: 320px;
  height: 197px;
  position: absolute;
  top: 70px;
  left: 8%;
  border: solid 1px #000;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
.card_header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
}
.header_img {
  width: 30px;
  height: 30px;
}
.user_list {
  margin-top: 80px;
  .list_item {
    border-bottom: 3px solid #666;
    border-top: 1px solid #666;
  }
}
.sign-out {
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
  position: fixed;
  bottom: 60px;
}
</style>
