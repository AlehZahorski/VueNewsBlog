import Vue from 'vue';
import VueRouter from 'vue-router';
import GlobalFeed from '../views/GlobalFeed';
import Register from '@/views/Register';
import Login from '@/views/Login';
import Feed from '@/components/Feed';

Vue.use(VueRouter);

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed,
  },
  {
    path: '/feed',
    name: 'feed',
    component: Feed,
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: Feed,
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: Feed,
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: Feed,
  },
  {
    path: '/article/:slug/edit',
    name: 'editArticle',
    component: Feed,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Feed,
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: Feed,
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: Feed,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
