export default [
  {
    path: "/home/infomationpage/interact",
    name: "Interact",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "Interact" */ "@/views/home/InfomationPage/components/Interactive/index.vue"
      ),
  },
  {
    path: "/home/infomationpage/system",
    name: "System",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "System" */ "@/views/home/InfomationPage/components/System/index.vue"
      ),
  },
];
