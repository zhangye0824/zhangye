import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
let first = {
    template: `
        <div>
            <h1>first</h1>
            <h2>name: {{$route.fullPath}}</h2> 
        </div>
    `,
}
let second = {
    template: `
        <div>
            <h1>second</h1>
            <h2>id:{{id}}</h2>
        </div>
    `,
    props: ['id'],
} 
let three = {
    template: `
        <div>
            <h1>three</h1>
            <h2>fullPath:{{fullPath}}----name:{{name}}</h2>
        </div>
    `,
    props: ['fullPath', 'name'],
}  
const routes = [
    { path: '/first', component: first, name:'first' },
    { 
        path: '/second/:id', component: second, name:'second',
        props: true, 
    },
    {
        path: '/three', component: three, name:'three',
        props(route) {
            let {fullPath, name} = route;
            return {fullPath, name}
        }
    },
    { path: '/second', redirect: '/second/xxoo' }, 
    {path: '*', component: {template: '<h1>默认路由</h1>', name: 'default'}}
]
const router = new Router({
    routes,
})
const app = new Vue({
    el: '#app',
    data: {

    },
    router,
})