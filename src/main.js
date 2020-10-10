import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import Routes from './Services/router/Routes'
import  './Services/icon/icon'
import Vuelidate from 'vuelidate'
import CKEditor from '@ckeditor/ckeditor5-vue';
import * as firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig ={
  apiKey: "AIzaSyCnl_l52psBvYOWhQ-6TebFcg-KHc3jefQ",
  authDomain: "mypanel-b0573.firebaseapp.com",
  databaseURL: "https://mypanel-b0573.firebaseio.com",
  projectId: "mypanel-b0573",
  storageBucket: "mypanel-b0573.appspot.com",
  messagingSenderId: "8701317759",
  appId: "1:8701317759:web:2d9958901b9fd27f98a54a",
  measurementId: "G-K1HNJEXFX8"
};
firebase.initializeApp(firebaseConfig);

Vue.use( CKEditor );
Vue.use(Vuelidate)


Vue.use(vueRouter);

const router=new vueRouter({
  routes:Routes,
  mode:'history'

});


router.beforeEach((to, from, next) => {
  const requiresAuth=to.matched.some(record=>record.meta.requiresAuth);
  const isAuthenticated= firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next("/Login")
  }else{
    next();
  }

})


Vue.config.productionTip = false


let app;
firebase.auth().onAuthStateChanged(user =>{
  if(!app){
   console.log(user);
    new Vue({
      render: h => h(App),
      router
    }).$mount('#app')
  }
})


