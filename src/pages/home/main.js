import Vue from 'vue'
import Home from './Home.vue'
import store from '@/store.js'

Vue.config.productionTip = false

new Vue({
	store,
  	render: h => h(Home)
}).$mount('#home')