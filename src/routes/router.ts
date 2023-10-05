import * as vR from 'vue-router';
import DashboardVue from '@pages/Dashboard.vue';
import Pnf from '@pages/NotFoundPage.vue';

const _routes: Array<vR.RouteRecordRaw> = [
    {
        path: '/',
        component: DashboardVue,
        name: 'home'
    },
    {
        path: '/demo',
        component: () => import('@pages/DemoPage.vue'),
        name: 'home.demo'
    },
    {
        path: '/pnf',
        component: Pnf,
        name: 'home.missing'
    },
    {
        path: '/login',
        component: () => import('@pages/AuthPage.vue'),
        name: 'home.login'
    },
]

const router = vR.createRouter({
    history: vR.createWebHistory(),
    routes: _routes
});

export default router