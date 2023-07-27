<template>
  <div class="max">
    <div class="header">
      <Header />
    </div>
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
import Header from "@/components/layout/header.vue";
export default defineComponent({
  components: {
    Footer,
    Header,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less">
.max {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 55;
}
main {
  margin-top: 74px;
  margin-bottom: 50px;
  flex: 1;
}
.footer {
  width: 100%;
  height: 50px;
}
</style>
