import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import Blogs from '../components/Blogs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home

  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs,

  },
  {
    path: '/Blogs',
    name: 'Blogs',
    component: Blogs,

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
