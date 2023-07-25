<template>
  <div class="wrap">
    <div>
      <h1>404</h1>
      <p>无法找到该资源</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="less">
.wrap {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}
</style>
