import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AmdinLogin from '@/components/AmdinLogin'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'AmdinLogin',
      component: AmdinLogin
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
