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
    },
    computed: {
        msg() {
            console.log(11111);
            return this.title.toLocaleUpperCase().split('0');
        }
    }
})