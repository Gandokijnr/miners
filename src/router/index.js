import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/auth/Signup.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/auth/Signin.vue'),
    },

    //404 pages redirection
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound/NotFound.vue'),
    },
  ],
})

export default router
