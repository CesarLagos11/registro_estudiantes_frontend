import { createRouter, createWebHistory } from 'vue-router'

import PaginaInicio from './components/PaginaInicio.vue'
import ListaEstudiantes from './components/ListaEstudiantes.vue'
import Registro from './components/Registro.vue'
import Consultar from './components/Consultar.vue'

const routes = [
  { path: '/', name: 'PaginaInicio', component: PaginaInicio },
  { path: '/registrar', name: 'Registrar', component: Registro },
  { path: '/consultar', name: 'Consultar', component: Consultar },
  { path: '/lista', name: 'Lista', component: ListaEstudiantes }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router