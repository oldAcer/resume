import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import skill from '@/components/skill'
import work from '@/components/skill/work'
import experience from '@/components/skill/experience'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/skill',
      name: 'skill',
      component: skill
    },
    {
      path: '/work',
      name: 'work',
      component: work
    },
    {
      path: '/experience',
      name: 'experience',
      component: experience
    }
  ]
})
