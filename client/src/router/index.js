import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      // lazy-loaded with code-splitting
      component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
    }
  ]
})
