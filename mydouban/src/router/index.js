import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import login from '../pages/login'
import move from '../pages/move'
import moveDescription from '../pages/movedescription'
import toggle from '../pages/toggle'
import radio from '../pages/radio'
import book from '../pages/book'
import group from '../pages/group'
import register from '../pages/register'
import bookDescription from '../pages/bookdescription'
import shouYeDes from '../pages/shouYeDes'
import more from '../pages/more'

Vue.use(Router)
export default new Router({

  routes: [{
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/move',
      name: 'move',
      component: move
    },
    {
      path: '/movedescription/:id',
      name: 'moveDescription',
      component: moveDescription
    },
    {
      path: '/toggle',
      name: 'toggle',
      component: toggle
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/bookdescription/:id',
      name: 'bookDescription',
      component: bookDescription
    },
    {
      path: '/shouyedes/:id',
      name: 'shouYeDes',
      component: shouYeDes
    },
    {
      path: '/more/',
      name: 'more',
      component: more
    },
    {
      path: "/*",
      redirect: "/home"
    }
  ]
})
