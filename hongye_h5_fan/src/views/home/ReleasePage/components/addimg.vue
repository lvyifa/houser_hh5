<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>添加图片</span>
      <span></span>
    </div>
    <div class="add_img">
      <p><b>室内图/视频</b><span>最多上传10张 0/10</span></p>
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="10"
        :after-read="afterRead"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
import { showToast } from "vant";
import { ref } from "vue";
import { useUserService } from "@/api/user";
const userService = useUserService();
const fileList = ref<any>([]);
//上传图片
const afterRead = async (info: any) => {
  const formData = new FormData();
  formData.append("file", info.file);
  const result = await userService.upload(formData);
  // 表单项中参数不同导致表单校验不通过的，可以通过手动维护
  console.log(result);
  fileList.value.avatar = result.imgurl;
};
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
</style>
