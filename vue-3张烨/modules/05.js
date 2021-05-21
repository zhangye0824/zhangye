import Vue from 'vue';
const sy102 = Vue.extend({
    template: '#tpl',
    data() {
        return {
            title: '斑马教育',
            name: '999'
        }
    }
})

let app = new Vue({
    el: '#app',
    data: {
        msg: '<a>我爱你</a>',   
    },
    components: {
        sy102,
    }
    
})