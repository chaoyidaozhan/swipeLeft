import Vue from "vue"
import routes from './route/';
import VueRouter from "vue-router";
import App from "./swipeLeft.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");