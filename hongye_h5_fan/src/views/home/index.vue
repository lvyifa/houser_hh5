<template>
  <div class="main">
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
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
<style>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
