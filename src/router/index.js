import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@pages/Home.vue')
const QuemSomos = () => import('@pages/QuemSomos.vue')
const Servicos = () => import('@pages/Servicos.vue')
const Contato = () => import('@pages/Contato.vue')
const Formulario = () => import('@pages/Formulario.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/quem-somos', component: QuemSomos },
  { path: '/servicos', component: Servicos },
  { path: '/contato', component: Contato },
  { path: '/formulario', component: Formulario }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
