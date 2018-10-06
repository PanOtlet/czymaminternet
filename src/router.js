import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Strona główna'
      }
    },
    {
      path: '/o-nas',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        title: 'O Nas'
      }
    },
    {
      path: '/speedtest',
      name: 'speedtest',
      component: () => import(/* webpackChunkName: "speedtest" */ './views/SpeedTest.vue'),
      meta: {
        title: 'Test szybkości internetu'
      }
    },
    {
      path: '/404',
      name: 'page404',
      component: () => import('./components/404.vue'),
      meta: {
        title: 'Strony nie znaleziono'
      }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + " | CzyMamInternet.pl";
  next();
})