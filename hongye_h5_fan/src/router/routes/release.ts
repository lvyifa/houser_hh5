export default [
  {
    path: "/release/second",
    name: "Second",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "Second" */ "@/views/home/ReleasePage/components/second.vue"
      ),
  },
  {
    path: "/release/newhouse",
    name: "Newhouse",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "Newhouse" */ "@/views/home/ReleasePage/components/newhouse.vue"
      ),
  },
  {
    path: "/release/havehouse",
    name: "Havehouse",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "Havehouse" */ "@/views/home/ReleasePage/components/havehouse.vue"
      ),
  },
];
