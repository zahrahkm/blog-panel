import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import Routes from './Services/router/Routes'
import  './Services/icon/icon'
import Vuelidate from 'vuelidate'
import CKEditor from '@ckeditor/ckeditor5-vue';


Vue.use( CKEditor );
Vue.use(Vuelidate)


Vue.use(vueRouter);

const router=new vueRouter({
  routes:Routes,
  mode:'history'

});




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
