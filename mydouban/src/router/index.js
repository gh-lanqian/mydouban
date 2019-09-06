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
import search from '../pages/search'

Vue.use(Router)
export default new Router({

  routes: [{
      path: '/home',
      name: 'home',
      component: home,
      beforeEnter: (to, from, next) => {
        var token = window.localStorage.getItem("token");
        if (!token) {
          alert("没有登录");
          next("/login")
        } else {
          next()
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/move',
      name: 'move',
      component: move,
      beforeEnter: (to, from, next) => {
        var token = window.localStorage.getItem("token");
        if (!token) {
          alert("没有登录");
          next("/login")
        } else {
          next()
        }
      }
    },
    {
      path: '/movedescription/:id',
      name: 'moveDescription',
      component: moveDescription
    },
    {
      path: '/toggle',
      name: 'toggle',
      component: toggle,
      beforeEnter: (to, from, next) => {
        var token = window.localStorage.getItem("token");
        if (!token) {
          alert("没有登录");
          next("/login")
        } else {
          next()
        }
      }
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio,
      beforeEnter: (to, from, next) => {
        var token = window.localStorage.getItem("token");
        if (!token) {
          alert("没有登录");
          next("/login")
        } else {
          next()
        }
      }
    },
    {
      path: '/book',
      name: 'book',
      component: book,
      beforeEnter: (to, from, next) => {
        var token = window.localStorage.getItem("token");
        if (!token) {
          alert("没有登录");
          next("/login")
        } else {
          next()
        }
      }
    },
    {
      path: '/group',
      name: 'group',
      component: group,
      beforeEnter: (to, from, next) => {
        var token = window.localStorage.getItem("token");
        if (!token) {
          alert("没有登录");
          next("/login")
        } else {
          next()
        }
      }
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
      path: '/more',
      name: 'more',
      component: more
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: "/*",
      redirect: "/home"
    }
  ]
})
