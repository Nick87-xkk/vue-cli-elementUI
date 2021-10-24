import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import * as api from './api'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = api;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

