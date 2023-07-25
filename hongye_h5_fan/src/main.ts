import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vant/lib/index.css";
import { Button, Form, Field, CellGroup, Toast } from "vant";
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Toast);
