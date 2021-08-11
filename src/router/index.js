import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Fill from '@/components/Fill'
import Data from '@/components/Data'
import Edit from '@/components/Edit'
import Datepicker from '@/components/Datepicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List,
      // meta: {
      //   title: 'title'
      // }
      },
    {
      path: '/fill/:id',
      name: 'Fill',
      component: Fill
    },
    {
      path: '/Data/:id',
      name: 'Data',
      component: Data
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/Datepicker',
      name: 'Datepicker',
      component: Datepicker
    }
  ]
})
