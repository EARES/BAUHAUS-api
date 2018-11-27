import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);


import App from './App.vue'
import Home from './components/Home.vue'
import Geri from './components/Geri.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new VueRouter
({

  routes: [

    { path: '/', component: Home  },
    {  path: '/iade', component: Geri, name: 'anan' }
    

  ],
  mode: 'history'

})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
