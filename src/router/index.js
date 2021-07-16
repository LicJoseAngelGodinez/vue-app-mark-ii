import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Creditos from '../views/Creditos.vue'
import Inspeccionar from '../views/Inspeccionar.vue'
import ControlCambios from '../views/ControlCambios.vue'

import firebase from "firebase/app"
import "firebase/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/creditos',
    name: 'Creditos',
    component: Creditos,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/creditos/inspeccionar',
    name: 'Inspeccionar',
    component: Inspeccionar,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/creditos/inspeccionar/control-de-cambios',
    name: 'ControlCambios',
    component: ControlCambios,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {
  const requiresAuth = to.matched.some( record => record.meta.requiresAuth );
  const isAuthenticaded = firebase.auth().currentUser;

  if ( requiresAuth && !isAuthenticaded ) {
    next("/login");
  } else {
    next();
  }
});

export default router
