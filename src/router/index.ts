import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import PageParent from '../pages/PageParent.vue'
import Forms from '../pages/Forms.vue'
import AddForm from '../pages/AddForm.vue'
import NotFound from '../pages/NotFound.vue'
import { showError } from '@/composables/ErrorAlert'

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
      component: PageParent,
      children: [
        {
          path: '',
          name: 'forms',
          component: Forms,
        },
        {
          path: ':id',
          name: 'addForm',
          component: AddForm,
        },
      ]
    },
    {
      name: '404-NotFound',
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
})

router.beforeEach(async to => {
  const accessToken = localStorage.getItem('accessToken');
  if (to.path !== '/' && !accessToken) {
    showError('ابتدا وارد شوید')
    return { name: 'login' };
  }
})

export default router
