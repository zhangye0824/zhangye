import Vue from 'vue';
Vue.filter('toUpper', (str) => {
    str = String(str);
    return str.toUpperCase();
})
let app = new Vue({
    el: '#app',
    data: {
        title: 'hello'
    },
    filters: {
        toArray(str, split) {
            str = String(str);
            return str.split(split);
        }
    }
})