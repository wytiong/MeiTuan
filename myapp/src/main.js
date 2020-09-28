import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/js/rem.js'
import './assets/icon/iconfont.css'
import Vant from 'vant'
Vue.use(Vant);
// import {Tab,Tabs} from 'vant'
// Vue.use(Tab);
// Vue.use(Tabs);
import 'vant/lib/index.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
