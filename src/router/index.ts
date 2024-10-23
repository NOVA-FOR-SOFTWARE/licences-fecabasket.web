import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DashBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: HomeView,
      meta:{
        title:"dashboard"
      }
    },
    {
      path: '/player',
      name: 'player',
      meta:{
        title:"player"
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PlayerPage.vue')
    }
  ]
})

export default router
