import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // here we are defining the route 'home' as the homepage, with the path '/' and to return the componengt homeview
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/brazil', 
      name: 'brazil', 
      component: () => import('../views/Brazil.vue')
    },
    {
      path:'/hawaii', 
      name: 'hawaii', 
      component: () => import('../views/Hawaii.vue')
    },
    {
      path:'/jamaica', 
      name: 'jamaica', 
      component: () => import('../views/Jamaica.vue')
    },
    {
      path:'/panama', 
      name: 'panama', 
      component: () => import('../views/Panama.vue')
    }
  ]
})

export default router
