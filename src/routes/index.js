import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
   
    {
        path: '/',
        name: 'home',
        component: Home
    },
]
});

export default router