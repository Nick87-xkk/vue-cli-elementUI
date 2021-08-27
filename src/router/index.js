import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path: '/',
        name: 'Register',
        component: Register
    },
    {
        path: '/useelement',
        name: 'UseElement',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/UseElement.vue')
    },
    {
        path: '/zujian',
        name: 'ZuJian',
        component: () => import('../views/ZuJian')
    },
    {
        path: '/App1',
        name: 'App1',
        component: () => import('../App1')
    },
    {
        path: "/changePW",
        name: "changePW",
        component: () => import('../views/changePassWord')
    },
    {
        path: "/signin",
        nameL: "signin",
        component: () => import('../views/SignIn')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/test')
    }
]

const router = new VueRouter({
    routes
})

export default router
