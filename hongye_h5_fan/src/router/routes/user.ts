export default [
  {
    path: "/home/user/publish",
    name: "Publish",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "Publish" */ "@/views/home/UserPage/components/publish/index.vue"
      ),
  },
  {
    path: "/home/user/collect",
    name: "Collect",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "Collect" */ "@/views/home/UserPage/components/collect/index.vue"
      ),
  },
  {
    path: "/home/user/history",
    name: "History",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "History" */ "@/views/home/UserPage/components/history/index.vue"
      ),
  },
  {
    path: "/home/user/pay",
    name: "Pay",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "Pay" */ "@/views/home/UserPage/components/pay/index.vue"
      ),
  },
  {
    path: "/home/user/problem",
    name: "Problem",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "Problem" */ "@/views/home/UserPage/components/problem/index.vue"
      ),
  },
  {
    path: "/home/user/cuservice",
    name: "Cuservice",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "Cuservice" */ "@/views/home/UserPage/components/cuservice/index.vue"
      ),
  },
];
