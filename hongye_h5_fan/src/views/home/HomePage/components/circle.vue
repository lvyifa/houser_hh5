<template>
  <div>
    <div class="circle_nav">
      <b>楼市资讯</b>
      <router-link to="/gird/informationpage">
        <span>更多</span>
      </router-link>
    </div>
    <div class="circle_card">
      <ul>
        <li>
          <van-tag type="danger">TOP1</van-tag>
          心悦尚城新房正在抢购心悦尚城新房正在抢
        </li>
        <li>
          <van-tag type="danger">TOP1</van-tag>
          心悦尚城新房正在抢购心悦尚城新房正在抢
        </li>
        <li>
          <van-tag type="danger">TOP1</van-tag>
          心悦尚城新房正在抢购心悦尚城新房正在抢
        </li>
        <li>
          <van-tag type="danger">TOP1</van-tag>
          心悦尚城新房正在抢购心悦尚城新房正在抢
        </li>
        <li>
          <van-tag type="danger">TOP1</van-tag>
          心悦尚城新房正在抢购心悦尚城新房正在抢
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.circle_nav {
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
.circle_card {
  width: 300px;
  height: 200px;
  border: 1px #000 solid;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  // text-align: center;
  ul li {
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px;
  }
}
</style>
