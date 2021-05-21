import Vue from 'vue';
const child = Vue.extend({
    template:`
        <div>
            <h1>子组件</h1>
            <h2>{{msg}}</h2>
        </div>
    `,
    data() {
        return {
            msg: '子组件'
        }
    },
    created() {
        this.$parent.$emit('demo', this.msg);
    }
})
const app = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    },
    components: {
        child
    },
    created() {
        this.$on('demo', (msg, ...args) => {
            this.msg = msg;
        })
    },
})