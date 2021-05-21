import Vue from 'vue';
let app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    methods: {
        say() {
            console.log('this is say');          
        },
        demo() {
            console.log('this is demo');
            this.say();
        },
        xxoo(...arg) {
            console.log(arg);
        }
    }
})