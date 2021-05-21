import Vue from 'vue';
const sy101 = Vue.extend({
    template: `
        <h1>sy103</h1>
    `
})
const sy102 = Vue.extend({
    // 模板
    template: '#tpl',
    data() {
        return {
            title: '斑码教育99',
            name: 'child9996'
        }
    }
});
let app = new Vue({
    el: '#app',
    data: {
        com: 'sy101'
    },
    components: {
        sy101,
        sy102
    },
    methods: {
        toggle() {
            this.com = this.com == 'sy102'? 'sy101': 'sy102';
        }
    }
})