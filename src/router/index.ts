import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Forms from '../pages/Forms.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms,
    },
    {
      name: '404-NotFound',
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
})

export default router
