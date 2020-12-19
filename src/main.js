import Vue from 'vue'
import App from './App.vue'

import store from './store'

//import '@mdi/font/css/materialdesignicons.min.css'
import Buefy from 'buefy'
//import 'buefy/dist/buefy.css'

import 'vue-bricks/lib/vueBricks.css'
import VueBricks from 'vue-bricks'
import CustomIcon from "@/components/shared/CustomIcon";

Vue.config.productionTip = false

Vue.component('custom-icon', CustomIcon)

Vue.use(Buefy, {
    defaultIconPack: "customIcon",
    defaultIconComponent: "custom-icon",
    customIconPacks: {
        'customIcon': {
            sizes: {
                'default': 'is-size-5',
                'is-small': 'is-size-1',
                'is-medium': 'is-size-3',
                'is-large': 'is-size-1'
            },
        },
    }
})
Vue.use(VueBricks)

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
