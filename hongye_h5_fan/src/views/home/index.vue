<template>
  <div class="max">
    <main>
      <router-view></router-view>
    </main>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/layout/footer.vue";

export default defineComponent({
  components: {
    Footer,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.max {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  margin-bottom: 50px;
  flex: 1;
}
.footer {
  width: 100%;
  height: 50px;
}
</style>
