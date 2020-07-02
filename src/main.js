import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./routes/index";
import firebase from "firebase/app";
import store from "./store";
import locale from 'element-ui/lib/locale/lang/en'
// import './assets/element-variables.scss'

Vue.use(ElementUI, {locale});
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.productionTip = false
const configOptions = {
  apiKey: "AIzaSyAEPqs4Osxy-AE4QM7-GdiBvKy8qIFKKeQ",
  authDomain: "allotwebsite.firebaseapp.com",
  databaseURL: "https://allotwebsite.firebaseio.com",
  projectId: "allotwebsite",
  storageBucket: "allotwebsite.appspot.com",
  messagingSenderId: "795251390050",
  appId: "1:795251390050:web:9d9f4719e74719091a033b",
  measurementId: "G-P790DETVBH"
};
firebase.initializeApp(configOptions);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
