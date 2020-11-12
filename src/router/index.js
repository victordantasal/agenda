import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: {name: 'Root'}
  },
  
  {
    path: '/',
    name: 'Root',
    component: () => import('../layouts/DefaultLayout.vue'),
    redirect: { name: 'Home' },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
