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
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: ()=>import('@/views/DestinationShow.vue'),
      props: route=> ({...route.params, id: parseInt(route.params.id)}),
      children:[
        {
          path: ':experienceSlug',
          name: 'experience.show',
          component: () => import('@/views/ExperienceShow.vue'),
          props: route=> ({...route.params, id: parseInt(route.params.id)})
        }
      ]
    },
    
  ]
})

export default router
