import { RouteRecordRaw } from "vue-router";

import footer from "./routes/footer";
export const routes: Array<RouteRecordRaw> = [
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
