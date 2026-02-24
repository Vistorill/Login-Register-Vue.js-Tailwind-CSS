import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login/login.vue")
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/Register/register.vue")
    },
    {
        path: "/home",
        component: () => import("@/layouts/DefaultLayout.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () => import("@/views/Home/home.vue")
            }
        ]
    },
    {
        path: "/analytics",
        component: () => import("@/layouts/DefaultLayout.vue"),
        children: [
            {
                path: "",
                name: "analytics",
                component: () => import("@/views/Analytics/analytics.vue")
            }
        ]
    },
    {
        path: "/loans",
        component: () => import("@/layouts/DefaultLayout.vue"),
        children: [
            {
                path: "",
                name: "loans",
                component: () => import("@/views/Loan/loan.vue")
            }
        ]
    },
    {
        path: "/clients",
        component: () => import("@/layouts/DefaultLayout.vue"),
        children: [
            {
                path: "",
                name: "clients",
                component: () => import("@/views/Sellers/sellers.vue")
            }
        ]
    },
    {
        path: "/payments",
        component: () => import("@/layouts/DefaultLayout.vue"),
        children: [
            {
                path: "",
                name: "payments",
                component: () => import("@/views/Payment/payment.vue")
            }
        ]
    },
    {
        path: "/reports",
        component: () => import("@/layouts/DefaultLayout.vue"),
        children: [
            {
                path: "",
                name: "reports",
                component: () => import("@/views/Reports/reports.vue")
            }
        ]
    },
    {
        path: "/notifications",
        component: () => import("@/layouts/DefaultLayout.vue"),
        children: [
            {
                path: "",
                name: "notifications",
                component: () => import("@/views/Notifications/notifications.vue")
            }
        ]
    },
    {
        path: "/settings",
        component: () => import("@/layouts/DefaultLayout.vue"),
        children: [
            {
                path: "",
                name: "settings",
                component: () => import("@/views/Settings/settings.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
