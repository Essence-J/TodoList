import Vue from 'vue';
// 导入App组件
import App from './App.vue';

// 创建Vue根实例
new Vue({
    el: '#app',
    // components: {
    //     App: App 
    // },
    // 这里, App就是 ./src/App.vue
    components: { App },
    template: '<App/>'
})