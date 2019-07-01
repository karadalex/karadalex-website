import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/sim',
      name: 'computer',
      component: () => import(/* webpackChunkName: "about" */ './views/Computer.vue'),
    },
    // Uncomment the below to disable computer view
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue'),
    },
    {
      path: '/research',
      name: 'research',
      component: () => import(/* webpackChunkName: "research" */ './views/Research.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue'),
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import(/* webpackChunkName: "cv" */ './views/CV.vue'),
    },
    {
      path: '/press',
      name: 'press',
      component: () => import(/* webpackChunkName: "press" */ './views/Press.vue'),
    },
  ],
});
