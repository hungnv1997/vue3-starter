import { createWebHistory, createRouter } from "vue-router";

import Default from "../layouts/Default.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
const routes = [
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
    path: "/",
    name: "dashboard",
    component: () => import("../pages/login/Login.vue"),
    meta: {
      layout: AuthLayout,
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
  {
    path: "/lessons",
    name: "lesson",
    component: () => import("../pages/Lessons.vue"),
    meta: {
      layout: AuthLayout,
    },
  },
  {
    path: "/icons",
    name: "icons",
    component: () => import("../pages/sample/Icons.vue"),
    meta: {
      layout: AuthLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
