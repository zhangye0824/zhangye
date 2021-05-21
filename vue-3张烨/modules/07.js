import Vue from 'vue';
const sy102 = Vue.extend({
    template: '#tpl',
    data() {
        return {
            title: '斑码教育99',
            name: 'child9996'
        }
    },
    // 1、创建
    beforeCreate() {
        console.log(111, 'beforeCreate');
    },
    created() {
        console.log(222, 'created');
    },
    beforeMount() {
        console.log(333, 'beforeMount');
    },
    mounted() {
        console.log(444, 'mouted');
    },
    // 2、存在
    beforeUpdate() {
        console.log(555, 'beforeUpdate');
    },
    updated() {
        console.log(666, 'updated');
    },
    // 3、销毁
    beforeDestroy() {
        console.log(777, 'beforeDestroy');
    },
    destroyed() {
        console.log(888, 'destroyed');
    },
    // 4、缓存
    activated() {
        console.log(999, 'activated');
    },
    deactivated() {
        console.log('zzz', 'deactivated');
    }
})
let app = new Vue({
    el: '#app',
    data: {

    },
    components: {
        sy102,
    },
    methods: {
        toggle() {
            this.com = this.com == 'sy102'? 'sy103': 'sy102';
        }
    }
})