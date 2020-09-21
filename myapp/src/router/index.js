import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home/index.vue'
import detail from './../views/detail/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:"/detail",
    component:detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
