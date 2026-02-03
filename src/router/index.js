import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/pages/Home.vue'
import QuemSomos from '@/components/pages/QuemSomos.vue'
import Servicos from '@/components/pages/Servicos.vue'
import Contato from '@/components/pages/Contato.vue'
import ComoFunciona from '@/components/pages/ComoFunciona.vue'
import Formulario from '@/components/pages/Formulario.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/sobre', name: 'sobre', component: QuemSomos },
  { path: '/servicos', name: 'servicos', component: Servicos },
  { path: '/como-funciona', name: 'comoFunciona', component: ComoFunciona },
  { path: '/contato', name: 'contato', component: Contato },
  { path: '/formulario', name: 'formulario', component: Formulario },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return { ...savedPosition, behavior: 'smooth' }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 92, // offset pro header sticky
      }
    }

    return { top: 0, behavior: 'smooth' }
  }
})
