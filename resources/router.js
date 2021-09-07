import Vue from 'vue';
import Router from 'vue-router';

import Index from '~/pages/Index';
import About from '~/pages/About';
import Products from '~/pages/Products';
import Contact from '~/pages/Contact';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

export function createRouter () {
  return new Router({
    base: '/',
    mode: 'history',
    linkActiveClass: 'morgan-link-active',
    linkExactActiveClass: 'morgan-link-exact-active',
    routes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }

      let position = {};

      if (to.matched.length < 2) {
        position = { x: 0, y: 0 };
      } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
        position = { x: 0, y: 0 };
      }
      if (to.hash) {
        position = { selector: to.hash };
      }

      return position;
    }
  });
}
