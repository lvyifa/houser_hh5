import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vant/lib/index.css";
import Vant from "vant";
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
app.use(Vant);
app.use(NutUI);
(function () {
  const baseSize = 16;
  function setRem() {
    const scale = document.documentElement.clientHeight / 375;
    document.documentElement.style.fontSize =
      baseSize * Math.min(scale, 2) + "px";
  }
  window.onresize = function () {
    setRem();
  };
})();
