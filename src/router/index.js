import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import OrganizationIndex from "../views/OrganizationIndex.vue";
import OrganizationShow from "../views/OrganizationShow.vue";
import FeedbackForm from "../views/FeedbackForm.vue";
import AgreementForm from "../views/AgreementForm.vue";
import ExperienceForm from "../views/ExperienceForm.vue";
import Blog from "../views/Blog.vue";
import Calendar from "../views/Calendar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
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
    path: '/organizations',
    name: 'organization_index',
    component: OrganizationIndex
  },
  {
    path: '/organizations/:id',
    name: 'organization_show',
    omponent: OrganizationShow
  }, 
  {
    path: '/feedbackforms/new',
    name: 'feedbackform',
    component: FeedbackForm
  },
  {
    path: '/agreementforms/new',
    name: 'agreementform',
    component: AgreementForm
  },
  {
    path: '/experienceforms/new',
    name: 'experienceform',
    component: ExperienceForm
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
