import Vue from 'vue';
import Router from 'vue-router';
// import '../scss/03.scss';
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
            <hr>
            <!--子路由的渲染位置-->
            <router-view></router-view>
        </div>
    `,
    props: ['fullPath', 'name'],
}  
let threea = {
    template: `
        <div>
            <h1>子路由：three-a</h1>
        </div>
    `,
}
let threeb = {
    template: `
        <div>
            <h1>子路由：three-b</h1>
        </div>
    `,
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
        },
        children: [
            {path: 'a', component: threea, name: 'threea'},
            {path: '/b', component: threeb, name: 'threeb'},
        ]
    },
]
const router = new Router({
    routes,
    scrollBehavior(to, from, scrollObj) {
        console.log(111, arguments);
        if (to.name == 'threea') {
            return {
                x: 0,
                y: 200
            }
        }
    }
})
const app = new Vue({
    el: '#app',
    data: {

    },
    router
})