import { createWebHashHistory, createRouter } from "vue-router";

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
