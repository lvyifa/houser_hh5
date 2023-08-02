import { RouteRecordRaw } from "vue-router";

import footer from "./routes/footer";
import gird from "./routes/gird";
import info from "./routes/info";
import user from "./routes/user";
import release from "./routes/release";
export const routes: Array<RouteRecordRaw> = [
  ...gird,
  ...info,
  ...user,
  ...release,
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "@/views/home/index.vue"),
    children: [...footer],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/user/login/index.vue"),
  },
  {
    path: "/registry",
    name: "Registry",
    component: () =>
      import(
        /* webpackChunkName: "Registry" */ "@/views/user/registry/index.vue"
      ),
  },
  {
    path: "/renddetail",
    name: "RendDetail",
    component: () =>
      import(
        /* webpackChunkName: "RendDetail" */ "@/views/home/Detail/rend_detail.vue"
      ),
  },
  {
    path: "/renddetailtel",
    name: "RendDetailtel",
    component: () =>
      import(
        /* webpackChunkName: "RendDetailtel" */ "@/views/home/Detail/tel.vue"
      ),
  },
  {
    path: "/renddetaillive",
    name: "RenddetailLive",
    component: () =>
      import(
        /* webpackChunkName: "RenddetailLive" */ "@/views/home/Detail/liveexam.vue"
      ),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "@/components/common/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];
