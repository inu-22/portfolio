import TopPage from "../components/pages/TopPage.vue"
import AboutPage from "../components/pages/AboutPage.vue"
import AppdataPage from "../components/pages/AppdataPage.vue"
//作品の詳細ページ
import MieruPage from "../components/pages/works/MieruPage.vue"
import UberPage from "../components/pages/works/UberPage.vue"
import GikkuriPage from "../components/pages/works/GikkuriPage.vue"
import PwpPage from "../components/pages/works/PwpPage.vue"
// エントリーシートページ
import ESPage from "../components/pages/ESPage.vue"

// import VueRouter from "vue-router"
import { createRouter, createWebHistory } from "vue-router"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: TopPage },
  { path: '/about', component: AboutPage },
  { path: '/appdates', component: AppdataPage },
  
  { path: '/es', component: ESPage },

  { path: '/works/mieruko', component: MieruPage },
  { path: '/works/uber', component: UberPage },
  { path: '/works/gikkuri', component: GikkuriPage },
  { path: '/works/pawapo', component: PwpPage },


]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  },//画面遷移時のスクロール位置を一番上に設定する
})

export default router