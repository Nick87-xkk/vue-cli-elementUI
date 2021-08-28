import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 结合 Vue 的异步组件 (opens new window)和 Webpack 的代码分割功能 (opens new window)，实现路由组件的懒加载
const register = () => import(/* webpackChunkName: "group-foo" */'../views/Register');
const UseElement = () => ({
    component: import(/* webpackChunkName: "group-foo" */'../views/UseElement'),
})
const ZuJian = () => import(/* webpackChunkName: "group-foo" */'../views/ZuJian');
const App1 = () => import(/* webpackChunkName: "group-foo" */'../App1');
const changePassWord = () => import(/* webpackChunkName: "group-foo" */'../views/changePassWord');
const test = () => import(/* webpackChunkName: "group-foo" */'../views/test');
const SignIn = () => import(/* webpackChunkName: "group-foo" */'../views/SignIn');

const routes = [
    {
        path: '/',
        name: 'Register',
        component: register
    },
    {
        path: '/useelement',
        name: 'UseElement',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: UseElement,
    },
    {
        path: '/zujian',
        name: 'ZuJian',
        component: ZuJian
    },
    {
        path: '/App1',
        name: 'App1',
        component: App1
    },
    {
        path: "/changePW",
        name: "changePW",
        component: changePassWord
    },
    {
        path: "/signin",
        nameL: "signin",
        component: SignIn
    },
    {
        path: '/test',
        name: 'test',
        component: test
    }
]

const router = new VueRouter({
    routes
})

export default router
