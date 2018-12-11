// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
import store from './stores'
// import '@/assets/main.css'
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)

// exporting event bus which will be imported in Header/footer
export const eventBus = new Vue()

Vue.config.productionTip = false

let app = ''
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyA7b3EsjDlWY7yFvviI7oHOvivKu8YLX4M',
  authDomain: 'vue-firebase-87f1a.firebaseapp.com',
  databaseURL: 'https://vue-firebase-87f1a.firebaseio.com',
  projectId: 'vue-firebase-87f1a',
  storageBucket: 'vue-firebase-87f1a.appspot.com',
  messagingSenderId: '1049187748209'
}

firebase.initializeApp(config)
if (!app) {
  /* eslint-disable no-new */
  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
