import Vue from 'vue';
const sy102 = Vue.extend({
    template:`
        <div>
            <!-- 组件只能有一个根元素 -->
            <h1>child</h1>
            <h2>{{title}} ---- {{name}}</h2>
        </div>
    `,
    data() {
        return {
            title: '斑马教育',
            name: 'child'
        }
    }
});

Vue.component('sy102', sy102);

let app = new Vue({
    el: '#app',
    data: {
        msg: '<a>我爱你</a>',  
    }
})