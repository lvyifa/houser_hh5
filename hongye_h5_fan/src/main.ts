import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vant/lib/index.css";
import {
  Button,
  Form,
  Field,
  CellGroup,
  Toast,
  Tabbar,
  TabbarItem,
  Search,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
} from "vant";
import Vant from "vant";
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
app.use(Vant);
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Toast);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Search);
app.use(Swipe);
app.use(SwipeItem);
app.use(Grid);
app.use(GridItem);
