import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/store"
import router from './router/router'
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBDaEFOZPU7PONYTUWiJW9pdrODPPmDH0E",
    authDomain: "project-management-syste-26827.firebaseapp.com",
    projectId: "project-management-syste-26827",
    storageBucket: "project-management-syste-26827.appspot.com",
    messagingSenderId: "91583567420",
    appId: "1:91583567420:web:27c9dbafbc47aa73b79539",
    measurementId: "G-GYTTP1XQHF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

const app = createApp(App).use(router).use(store)
app.config.productionTip = false;
app.mount('#app')
