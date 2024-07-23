import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/cart',
      name: 'cart',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Cart.vue')
    }
  ]
})

export default router
