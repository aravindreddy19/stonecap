import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import Blogs from '../components/Blogs.vue'
import Product from '../views/Product.vue'
import Colors from '../components/Colors.vue'
import Information from '../components/Information.vue'
import More from '../components/More.vue'

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
  {
    path: '/Product',
    name: 'Product',
    component: Product,

  },
  {
    path: '/Colors',
    name: 'Colors',
    component: Colors,

  },
  {
    path: '/Information',
    name: 'Information',
    component: Information,

  },
  {
    path: '/More',
    name: 'More',
    component: More,

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
