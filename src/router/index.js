import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPage from '../components/pages/DashboardPage.vue'
import EditPage from "../components/pages/EditPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardPage
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditPage
  }
]

const router = new VueRouter({
  routes
})

export default router
