import Vue from 'vue';
const child = Vue.extend({
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
        this.$emit('child-demo', this.msg)
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
        xxoo(msg){
            this.msg = msg;
        }
    }
})