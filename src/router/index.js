// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Regidter from '@/pages/Register'

let originPush = VueRouter.prototype.push;

let orginReplace = VueRouter.prototype.replace;
//重写push|replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        //call||apply 相同点：都可以调用函数一次，都可以篡改函数上下文一次


        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { });
    }


}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        //call||apply 相同点：都可以调用函数一次，都可以篡改函数上下文一次


        orginReplace.call(this, location, resolve, reject)
    } else {
        orginReplace.call(this, location, () => { }, () => { });
    }
}




// 配置路由

export default new VueRouter({
    //配置路由
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            path: "/search/:keyword",
            component: Search,
            meta: { show: true },
            name: "search"
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        {
            path: "/register",
            component: Regidter,
            meta: { show: true }
        },
        //重定向
        {
            path: '*',
            redirect: "/home"

        }
    ]
})