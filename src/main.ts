import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@quasar/extras/material-icons/material-icons.css'
import router from './router/index'
import 'reset-css'
import './styles/index.scss'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'
import './styles/index.scss'

import App from './App.vue'
import store from './store'

library.add(fas)

createApp(App)
.use(Quasar, { plugins: {} })
.use(router)
.use(store)
.component('fa', FontAwesomeIcon)
.mount('#app')
