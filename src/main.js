import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import './assets/tailwind.css'
import localizeFilter from './filters/localize.filter'
import ScrollAnimation from './directives/scrollanimation.js'
import Vuelidate from "vuelidate";

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

Vue.use(Vuelidate);
Vue.filter('localize', localizeFilter)
Vue.directive('scrollanimation', ScrollAnimation)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY || 'api-key-not-set',
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || 'env-not-set',
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL || 'env-not-set',
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || 'env-not-set',
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || 'env-not-set',
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || 'env-not-set',
    appId: process.env.VUE_APP_FIREBASE_APP_ID || 'env-not-set',
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID || 'env-not-set'
});

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  
})
