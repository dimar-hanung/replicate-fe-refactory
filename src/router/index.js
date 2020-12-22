import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../pages/HomePage.vue")
  },
  {
    path: "/courses",
    name: "CoursesPage",
    component: () => import("../pages/CoursesPage.vue")
  },
  {
    path: "/blog",
    name: "BlogPage",
    component: () => import("../pages/BlogPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
