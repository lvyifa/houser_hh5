<template>
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item icon="home-o"
      ><router-link to="/home/homepage">首页</router-link></van-tabbar-item
    >
    <van-tabbar-item icon="search"
      ><router-link to="/home/lookhousing">找房</router-link></van-tabbar-item
    >
    <van-tabbar-item icon="friends-o"
      ><router-link to="/home/releasepage">发布</router-link></van-tabbar-item
    >
    <van-tabbar-item icon="setting-o"
      ><router-link to="/home/infomationpage"
        >信息</router-link
      ></van-tabbar-item
    >
    <van-tabbar-item icon="manager-o"
      ><router-link to="/home/userpage">我的</router-link></van-tabbar-item
    >
  </van-tabbar>
</template>

<script setup>
import { ref } from "vue";
const active = ref(0);
</script>

<style lang="less"></style>
