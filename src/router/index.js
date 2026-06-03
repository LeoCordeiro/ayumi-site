import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Sobre from '@/pages/Sobre.vue'
import ComoFunciona from '@/pages/ComoFunciona.vue'
import Catalogo from '@/pages/Catalogo.vue'
import SolicitarCuradoria from '@/pages/SolicitarCuradoria.vue'
import PoliticaPrivacidade from '@/pages/PoliticaPrivacidade.vue'
import PoliticaTermos from '@/pages/PoliticaTermos.vue'
import PoliticaRepasse from '@/pages/PoliticaRepasse.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/sobre', component: Sobre },
  { path: '/como-funciona', component: ComoFunciona },
  { path: '/catalogo', component: Catalogo },
  { path: '/solicitar', component: SolicitarCuradoria },
  { path: '/privacidade', component: PoliticaPrivacidade },
  { path: '/termos', component: PoliticaTermos },
  { path: '/repasse', component: PoliticaRepasse },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router
