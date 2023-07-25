import {
  createRouter,
  createWebHistory,
  // NavigationGuardNext,
} from "vue-router";
import { routes } from "./routes";
// import { isLogin } from "@/utils/common";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, form, next: NavigationGuardNext) => {
//   // 判断访问的路由页面是否需要登录
//   if (to.meta !== undefined && to.meta.auth) {
//     // 需要登录才能够访问的页面判断登录态
//     // true 继续访问
//     // false 重新定向到登录页
//     if (isLogin()) {
//       next();
//     } else {
//       next({
//         name: "Login",
//         query: {
//           redirect: encodeURIComponent(to.path),
//         },
//         replace: true,
//       });
//       return false;
//     }
//   } else {
//     next();
//   }
// });

export default router;
