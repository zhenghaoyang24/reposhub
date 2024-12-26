import './assets/base.less'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@hoeyzheng/common-style-less';


import App from './App.vue'
import router from './router'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')


