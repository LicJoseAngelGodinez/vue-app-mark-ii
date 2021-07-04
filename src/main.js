import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVpVmJPaDEtSQivRRygE2NtQqzLzNQlP0",
  authDomain: "ang-mark-ii.firebaseapp.com",
  projectId: "ang-mark-ii",
  storageBucket: "ang-mark-ii.appspot.com",
  messagingSenderId: "437614126147",
  appId: "1:437614126147:web:6c0a1ee5d5f0f1b2e760f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged( () => {
  if ( !app ) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});


