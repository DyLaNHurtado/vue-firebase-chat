import { createApp} from 'vue'
import './style.css'
import App from './App.vue'

import store from './store'
import router from './router'
import VueToast from "vue-toast-notification";
const app = createApp(App)

// use(VueToast,{
//     position:"bottom-right",
// })
app.use(store)
app.use(router)

app.mount('#app')
