import Router from 'vue-router';
import Vue from 'vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            alias: '/',
            name: 'home',
            component: () => import('./components/index.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./components/login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./components/register.vue'),
        }
    ]
})