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

Vue.use(Router)

export default new Router({
  routes: [
    {
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
      path: '/movedescription',
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
      path:"/*",
      redirect:"/home"
    }
  ]
})
