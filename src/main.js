import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import StudentStore from './stores/StudentStore'
import router from './router/router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  store: StudentStore,
  router: router
}).$mount('#app')
