import Vue from 'vue';
let app = new Vue({
    el: '#app',
    data: {
        title: 'hello',
        books: ['张一杉', '张一彬'],
        as: {
            name: 'zhangsan',
            sex: 'nan'
        }
    }
})

app.title = 'i love you';

app.books.push('1111111');