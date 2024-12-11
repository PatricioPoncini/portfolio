import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './style.css'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

const app = createApp(App);

app.use(Vue3Toastify, {
    autoClose: 3000,
} as ToastContainerOptions);

app.mount('#app');