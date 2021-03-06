import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home'
import Vendor from '../components/VendorJoin'
import Register from '../components/RegisterParking'
import Chatbox from '../components/ChatBox'


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
    {
        path: '/vendor',
        name: 'vendor',
        component: Vendor
    },
    {
        path: '/chatbox',
        name: 'chatbox',
        component: Chatbox
    },
]
});

export default router