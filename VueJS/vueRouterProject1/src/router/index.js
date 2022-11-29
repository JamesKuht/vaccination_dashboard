import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceData from '@/data.json'


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
      // here we are creating a 'protected path' which only logged in users can access
      path: '/protected',
      name: 'protected',
      component: ()=> import('@/views/ProtectedPage.vue'),
      meta:{
        requiresAuth: true,
      }
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: ()=> import('@/views/InvoicesPage.vue'),
      meta:{
        requiresAuth: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('@/views/LoginPage.vue')
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: ()=>import('@/views/DestinationShow.vue'),
      props: route=> ({...route.params, id: parseInt(route.params.id)}),
      beforeEnter(to, from){
        const exists = sourceData.destinations.find(
          destination => destination.id === parseInt(to.params.id)
        )
        if(!exists) return {
          name: 'NotFound',
          // the below allows keeping the URL while rendering a different page
          // ...it doesn't seem strictly necessary.
          params: { pathMatch: to.path.split('/').slice(1) },
          query: to.query,
          hash: to.hash,
        }
      },
      children:[
        {
          path: ':experienceSlug',
          name: 'experience.show',
          component: () => import('@/views/ExperienceShow.vue'),
          props: route=> ({...route.params, id: parseInt(route.params.id)})
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: ()=> import ('@/views/NotFound.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve)=>{
      setTimeout(()=> resolve({ top:0 }), 300)
  })
}
})
router.beforeEach((to, from)=>{
  if(to.meta.requiresAuth && !window.user){
    //need to login if not already.
    return {name: 'login', query:{ redirect: to.fullPath }}
  }
})
export default router
