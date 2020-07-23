import Vue from 'vue'
import VueRouter from 'vue-router'
import vContactList from '../components/contacts/v-contact-list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'contacts',
    component: vContactList
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/contacts/v-contact-user-info.vue')
  },
  {
    path: '/chats',
    name: 'chats',
    component: () => import('../components/users/v-users-list.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../components/users/chat/v-user-chat.vue'),
    props: true
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
