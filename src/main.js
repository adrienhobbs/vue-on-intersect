import Vue from 'vue'
import App from './App.vue'
import VueOnIntersect from './lib/index'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueOnIntersect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
