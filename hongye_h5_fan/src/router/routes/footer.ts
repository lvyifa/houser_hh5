export default [
  {
    path: "/home/homepage",
    name: "HomePage",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "HomePage" */ "@/views/home/HomePage/index.vue"
      ),
  },
  {
    path: "/home/lookhousing",
    name: "LookHousing",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "LookHousing" */ "@/views/home/LookHousing/index.vue"
      ),
  },

  {
    path: "/home/releasepage",
    name: "ReleasePage",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "ReleasePage" */ "@/views/home/ReleasePage/index.vue"
      ),
  },
  {
    path: "/home/infomationpage",
    name: "InfomationPage",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "InfomationPage" */ "@/views/home/InfomationPage/index.vue"
      ),
  },
  {
    path: "/home/userpage",
    name: "UserPage",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "UserPage" */ "@/views/home/UserPage/index.vue"
      ),
  },
  // {
  //   path: "/detail/:title/:id",
  //   name: "detail",
  //   meta: {
  //     auth: true,
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "detail" */ "@/components/common/detail.vue"),
  // },
];
