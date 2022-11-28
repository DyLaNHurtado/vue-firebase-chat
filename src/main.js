import Vue from "vue";
import { createApp} from 'vue'
import './style.css'
import App from './App.vue'

import store from './store'
import router from './router'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)


Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
  position:"bottom-right"
});


app.use(store)
app.use(router)

app.mount('#app')
