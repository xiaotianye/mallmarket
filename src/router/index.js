import Vue from 'vue'
import vueRouter from 'vue-router'

const Home= () => import('views/home/home')
const Category= () => import('views/category/category')
const Cart= () => import('views/cart/cart')
const Profile= () => import('views/profile/profile')

// 安装插件
Vue.use(vueRouter)

//创建路由对象

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new vueRouter({
  routes,
  mode: 'history'
})

//导出

export default router