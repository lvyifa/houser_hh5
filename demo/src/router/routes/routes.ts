import { RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/user/login'
  },
  {
    path: '/user/login',
    name: 'UserLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/login.vue')
  },
  {
    path: '/user/registry',
    name: 'UserRegistry',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "UserRegistry" */ '@/views/user/registry.vue')
  },
  {
    path: '/home/index',
    name: 'HomeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "HomeView" */ '@/views/home/index.vue')
  },
  {
    path: '/classify/index',
    name: 'ClassIfy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ClassIfy" */ '@/views/classify/index.vue')
  },
  {
    path: '/cart/index',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Cart" */ '@/views/cart/index.vue')
  },
  {
    path: '/my/index',
    name: 'My',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "My" */ '@/views/my/index.vue')
  },
  {
    path: '/detail/:obj',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Detail" */ '@/views/detail/index.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '@/views/common/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]
