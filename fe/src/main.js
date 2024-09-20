import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import '@/common/Icons.js'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import './assets/main.css'

const app = createApp(App);

app.use(BootstrapVue3)
app.component("FontAwesomeIcon", FontAwesomeIcon)
app.mount('#app')
