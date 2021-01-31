import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;