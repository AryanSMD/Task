import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import FormsPage from '../pages/FormsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: LoginPage,
    },
    {
      path: '/forms',
      name: 'FormsPage',
      component: FormsPage,
    },
  ],
})

export default router
