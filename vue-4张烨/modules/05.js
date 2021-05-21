import Vue from 'vue';
const child = Vue.extend({
    props: ['demo'],
    template: '#child',
    data() {
        return {
            msg: 'child component'
        }
    },
    created() {
        // 调用父组件的方法
        this.demo(this.msg);
    },
})
const other = Vue.extend({
    props: ['msg'],
    template: '#other',
})
const app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    components: {child, other},
    methods: {
        xxoo(msg) {
            this.msg = msg;
        }
    }

})