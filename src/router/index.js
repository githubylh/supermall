import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Home = () => import("../views/home/home.vue");
const Category = () => import("../views/category/category.vue");
const Shopcart = () => import("../views/shopcart/shopcart.vue");
const Profile = () => import("../views/profile/profile.vue");
export default new Router({
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            component: Home
        },{
            path:"/category",
            component: Category
        },{
            path:"/shopcart",
            component: Shopcart
        },{
            path:"/profile",
            component: Profile
        }
    ],
    mode:"history"
})