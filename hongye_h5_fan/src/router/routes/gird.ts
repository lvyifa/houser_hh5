export default [
  {
    path: "/gird/broker",
    name: "Broker",
    meta: {
      auth: true,
    },
    component: () =>
      import(/* webpackChunkName: "Broker" */ "@/views/gird/Broker/index.vue"),
  },
  {
    path: "/gird/buyhouse",
    name: "BuyHouse",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "BuyHouse" */ "@/views/gird/BuyHouse/index.vue"
      ),
  },
  {
    path: "/gird/findmap",
    name: "FindMap",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "FindMap" */ "@/views/gird/FindMap/index.vue"
      ),
  },
  {
    path: "/gird/groupviewing",
    name: "GroupViewing",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "GroupViewing" */ "@/views/gird/GroupViewing/index.vue"
      ),
  },
  {
    path: "/gird/informationpage",
    name: "InformationPage",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "InformationPage" */ "@/views/gird/InformationPage/index.vue"
      ),
  },
  {
    path: "/gird/liveviewing",
    name: "LiveViewing",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "LiveViewing" */ "@/views/gird/LiveViewing/index.vue"
      ),
  },
  {
    path: "/gird/realcircle",
    name: "RealCircle",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "RealCircle" */ "@/views/gird/RealCircle/index.vue"
      ),
  },
  {
    path: "/gird/renthouse",
    name: "RentHouse",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "RentHouse" */ "@/views/gird/RentHouse/index.vue"
      ),
  },

  {
    path: "/gird/seekingrent",
    name: "SeekingRent",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "SeekingRent" */ "@/views/gird/SeekingRent/index.vue"
      ),
  },
  {
    path: "/gird/wantbuy",
    name: "WantBuy",
    meta: {
      auth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "WantBuy" */ "@/views/gird/WantBuy/index.vue"
      ),
  },
];
