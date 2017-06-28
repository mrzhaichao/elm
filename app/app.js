/**
 * Created by chao on 2017/6/11.
 */

import Vue from 'vue';
//import $ from 'jquery';
import VueRouter from 'vue-router';
//import app from './app.vue';
import food from './router/food.vue';
import order from './router/order.vue';
import city from './router/city.vue';
import login from './router/login.vue';
import location from './router/location.vue';
import select from  './router/select.vue';
import my from './router/my.vue';
import restaurant from './router/restaurant.vue';
import resetPassword from './router/resetPassword.vue';
import './styles/mian.css';
import home from './router/home.vue';
import app from './app.vue';
require('font-awesome-webpack');


Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {path: '/resetPassword', component: resetPassword},
        {path: '/login', component: login},
        {path: '/city', component: city},
        {path: '/restaurant', component: restaurant},
        {path: '/', component: city},
        {path: '/location', component: location},
        {
            path: '/home', component: home,
            children: [
                {path: '/select', component: select},
                {path: '/my', component: my},
                {path: '/shop', component: food},
                {path: '/order', component: order},
                {path: '/', component: food}
            ]
        }
    ]
});

new Vue({
    el: '#app',
    template: '<app />',
    router: router,
    components: {
        app
    }
});

var bus = new Vue();
export {bus};