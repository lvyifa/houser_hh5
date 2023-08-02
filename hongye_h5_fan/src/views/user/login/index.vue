<template>
  <div class="login-wraper">
    <img
      src="https://img1.baidu.com/it/u=3628289042,1343475138&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"
      alt=""
      class="tabimg"
    />
    <van-form @submit="onSubmit" ref="formRef" :model="formState">
      <van-cell-group inset>
        <van-field
          v-model="formState.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="formState.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="formState.captcha"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        />
        <span v-html="captcha" @click="onCaptchaClick"></span>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, toRaw } from "vue";
import { UserManageType } from "@/interface/model/user";
import { useUserService } from "@/api/user";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { Toast } from "vant";
import { getStorage } from "@/utils/common";
import * as _ from "lodash";
const store = useStore();
const route = useRoute();
const userService = useUserService();

const formRef = ref();
const formState = ref<UserManageType.LoginFormState>(
  new UserManageType.LoginFormState()
);

const captcha = ref();
const onSubmit = async (): Promise<void> => {
  formRef.value
    .validate()
    .then(async (): Promise<void> => {
      const result = await userService.login(formState.value);
      console.log(result);

      if (!result.code) return Toast.error(result.msg);
      store.dispatch({ type: "user/SAVE_USER_TOKEN", payload: result.token });
      const user = await userService.getUserIdByToken(
        getStorage("token") as string
      );
      store.commit({ type: "user/SAVE_UID", payload: user.uid });
      if (!route.query.redirect) {
        window.location.href = "/home/homepage";
      } else {
        window.location.href = `${decodeURIComponent(
          route.query.redirect as string
        )}`;
      }
    })
    .catch((err: any) => {
      console.log(err);
    });
};
const getCaptcha = async () => {
  captcha.value = await userService.getCaptcha();
};
const onCaptchaClick = _.debounce(getCaptcha, 500);
onMounted(() => {
  getCaptcha();
});
</script>

<style lang="less">
.tabimg {
  width: 200px;
  height: 200px;
  margin-left: 15%;
}
.login-wraper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 350px;
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 45px 40px;
  box-sizing: border-box;
  background-color: rgb(158, 254, 249);
  & > .login-head {
    height: 50px;
  }
}
</style>
