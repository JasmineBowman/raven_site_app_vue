import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UserIndex from "../views/UserIndex.vue";
import UserNew from "../views/UserNew.vue";
import UserCreate from "../views/UserCreate.vue";
import UserShow from "../views/UserShow.vue";
import UserEdit from "../views/UserEdit.vue";
import UserUpdate from "../views/UserUpdate.vue";
import UserDestroy from "../views/UserDestroy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/users',
    name: 'user_index',
    component: UserIndex
  },
  {
    path: '/users/new',
    name: 'user_new',
    component: UserNew
  },
  {
    path: '/users',
    name: 'user_create',
    component: UserCreate
  },
  {
    path: '/user/:id',
    name: 'user_show',
    component: UserShow
  }, 
  {
    path: '/user/:id/edit',
    name: 'user_edit',
    component: UserEdit
  },
  {
    path: '/user/:id',
    name: 'user_destroy',
    component: UserDestroy
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
