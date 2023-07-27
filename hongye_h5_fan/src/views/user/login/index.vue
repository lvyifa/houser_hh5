<template>
  <van-form @submit="onSubmit" ref="formRef">
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
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserManageType } from "@/interface/model/user";
import { useUserService } from "@/api/user";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const userService = useUserService();
    const state = {
      formRef: ref(),
      formState: ref<UserManageType.LoginFormState>(
        new UserManageType.LoginFormState()
      ),
    };
    const onSubmit = async (values: UserManageType.LoginFormState) => {
      // console.log("submit", values);
      console.log(state.formState.value);

      //Validate方法是用于检查输入数据的合法性,以确保数据在传输前能够符合相应的规范且不会引起异常
      state.formRef.value
        .validate()
        .then(async () => {
          const status = await userService.login(state.formState.value);
          console.log(status);
          if (!status) {
            state.formState.value = new UserManageType.LoginFormState();
            return;
          } else {
            window.location.href = "/home/homepage";
          }
        })
        .catch((err: any) => {
          console.log(err);
        });
    };
    return {
      ...state,
      onSubmit,
    };
  },
});
</script>

<style></style>
