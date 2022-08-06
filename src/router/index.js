import { createRouter, createWebHistory } from "vue-router";
import { sidebar_route } from './sidebar-router.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("~/pages/main.vue"),
        },
        {
            path: "/",
            component: () => import("~/layout/Admin.vue"),
            children: [
                {
                    path: "dashboard/cabang",
                    name: "cabang",
                    component: () => import("~/pages/dashboard/cabang.vue"),
                },
                {
                    path: "profile",
                    name: "profile",
                    component: () => import("~/pages/profile/index.vue"),
                }
            ]
        },
        ...sidebar_route
        
    ],  
});

export default router;