import { createWebHashHistory, createRouter } from "vue-router";

import Default from "../layouts/Default.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
const routes = [
  {
    path: "/",
    name: "*",
    component: () => import("../pages/home/Home.vue"),
    // component: Home,
    meta: {
      layout: Default,
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../pages/home/Home.vue"),
    // component: Home,
    meta: {
      layout: Default,
    },
  },
  {
    path: "/detail_course/:id",
    component: () => import("../pages/detail_course/_id.vue"),
    // component: Home,
    meta: {
      layout: Default,
    },
    sensitive: true,
  },
  {
    path: "/login",
    name: "add",
    component: () => import("../pages/login/Login.vue"),
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
