import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.css'
import './assets/animations.css'
import { vReveal } from './directives/reveal'

createApp(App)
  .use(router)
  .use(store)
  .directive('reveal', vReveal)
  .mount('#app')
