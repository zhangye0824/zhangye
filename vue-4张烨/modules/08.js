import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        msg: 'this is store'
    }
})
let child = Vue.extend({
    template: '#child',
    created() {
        console.log('this is child');
    }
})
let other = Vue.extend({
    template: '#other',
    created() {
        console.log('this is other');
    }
})
const app = new Vue({
    store,
    el: '#app',
    data: {

    },
    components: {
        child,
        other
    },
    created() {
        console.log('this is app')
    }
})