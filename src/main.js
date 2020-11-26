import Vue from 'vue'
import App from './App.vue'

import store from './store'

import '@mdi/font/css/materialdesignicons.min.css'
import Buefy from 'buefy'
//import 'buefy/dist/buefy.css'

import 'vue-bricks/lib/vueBricks.css'
import VueBricks from 'vue-bricks'

Vue.config.productionTip = false


Vue.use(Buefy)
Vue.use(VueBricks)

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
