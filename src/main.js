import Vue from 'vue'
import { MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.use(MdCard)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
