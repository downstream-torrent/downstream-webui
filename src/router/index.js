import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    }
  ]
})
