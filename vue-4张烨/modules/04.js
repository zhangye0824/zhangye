import Vue from 'vue';
const child = Vue.extend({
    props: ['demo'],
    template: `
        <div>
            <h1>child part</h1>
            <h2>{{msg}}</h2>
        </div>
    `,
    data() {
        return {
            msg: 'child component'
        }
    },
    created() {
        this.demo(this.msg);
    },
});
const app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    components: {
        child
    },
    methods: {
        xxoo(msg) {
            console.log('xxoo', arguments);
            this.msg = msg;
        }
    }

})