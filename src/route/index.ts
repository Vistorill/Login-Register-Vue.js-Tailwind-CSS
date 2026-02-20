import { createRouter, createWebHistory } from 'vue-router'

const routes = [

    {
        path: "/",
        redirect: "/login"

    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login/login.vue"),
        translate: "login"

    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/Register/register.vue")
    },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home/home.vue")
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router