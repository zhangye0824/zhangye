import Vue from 'vue';
const app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    created() {
        this.$on('demo', (msg, ...args) => {
            this.msg = msg
        })
        setTimeout(() => {
            this.$emit('demo', 1,2,3,4);
        }, 2000);
    },
    methods: {
        xxoo() {
            console.log('xxoo', arguments);
        }
    }
})