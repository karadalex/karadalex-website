import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'computer',
      component: () => import(/* webpackChunkName: "about" */ './views/Computer.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "about" */ './views/Blog.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import(/* webpackChunkName: "about" */ './views/Portfolio.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import(/* webpackChunkName: "about" */ './views/CV.vue')
    },
    {
      path: '/press',
      name: 'press',
      component: () => import(/* webpackChunkName: "about" */ './views/Press.vue')
    },
  ]
})
