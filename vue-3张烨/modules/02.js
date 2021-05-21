import Vue from 'vue';
Vue.directive('bmHtml', {
    // 绑定指令
    bind(el, binding, vnode) {
        console.log(111, 'bind');
        // console.log(arguments);
        el.innerHTML = binding.value;
    },
    // 页面渲染
    inserted(el, binding, vnode) {
        console.log(112, 'inserted');
        // console.log(arguments);

    },
    // 更新数据
    update(el, binding, vnode, oldVnode) {
        console.log(113, 'update');
        // console.log(arguments);
        el.innerHTML = binding.value;

    },
    // 更新视图
    componentUpdated(el, binding, vnode) {
        console.log(114, 'componentUpdated');
    },
    // 解绑
    unbind(el, binding, vnode) {
        console.log(115, 'unbind');
    },
});
Vue.directive('bmHtml', (el, binding, ...args) => {
    console.log(binding.value, binding.oldValue);
    if (binding.value !== binding.oldValue) {
        console.log(el);
        el.innerHTML = binding.value;
    }
    
})

let vue = new Vue({
    el: '#app',
    data: {
        msg: '<b>张烨</b>',
        title: '斑马教育',
        flag: true,
    },
    methods: {
        toggle() {
            this.flag = !this.flag;
        }
    },
    directives: {
        bmOnce: {
            bind(el, binding) {
                console.log(99999999999999);
                el.innerHTML = binding.value;
            }
        },
        bmShow(el, binding, vnode) {
            if (binding.value) {
                el.style.display = '';
            } else {
                el.style.display="none"
            }
        }
    }
})