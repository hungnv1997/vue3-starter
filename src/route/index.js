import { createWebHashHistory, createRouter } from "vue-router";

import FitLayout from "../layouts/FitLayout.vue";
import Default from "../layouts/Default.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/home/Home.vue"),
    // component: Home,
    meta: {
      layout: Default,
    },
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../pages/detail/Detail.vue"),
    meta: {
      layout: Default,
    },
  },
  {
    path: "/:movie/:id",
    name: "Movie",
    component: () => import("../pages/reading/Reading.vue"),
    meta: {
      layout: FitLayout,
    },
  },
  // {
  //   path: "/login",
  //   name: "add",
  //   component: () => import("../pages/login/Login.vue"),
  //   meta: {
  //     layout: AuthLayout,
  //   },
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../pages/404/PageNotFound.vue"),
    meta: {
      layout: AuthLayout,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
