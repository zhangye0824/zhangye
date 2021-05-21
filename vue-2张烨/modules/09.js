import Vue from 'vue';
let app = new Vue({
    el: '#app',
    data: {
        flag: true
    },
    methods: {
        toggle() {
            this.flag = !this.flag;
        }
    }
})