import Vue from 'vue';
let app = new Vue({
    el: '#app',
    data: {
        flag: true
    },
    methods: {
        toggle() {
            this.flag = !this.flag;
        },
        beforeEnter() {
            console.log(111, 'beforEnter');
        },
        enter() {
            console.log(112, 'enter');

        },
        afterEnter() {
            console.log(113, 'afterEnter');

        },
        beforeLeave() {
            console.log(114, 'beforleave');

        },
        leave() {
            console.log(115, 'leave');

        },
        afterLeave() {
            console.log(116, 'afterleave');

        },
    }
})


