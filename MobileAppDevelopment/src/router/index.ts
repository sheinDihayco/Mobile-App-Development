import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Footer from '../views/Footer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/signin',
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/signin/index.vue'),
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
  },
  {
    path: '/tabs/',
    component: Footer,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: 'profile',
        component: () => import('@/views/profile/index.vue'),
      },
      {
        path: 'menu',
        component: () => import('@/views/menu/index.vue'),
      },
      {
        path: 'card',
        component: () => import('@/views/Card/index.vue'),
      },
      {
        path: 'modal',
        component: () => import('@/views/Modal/index.vue'),
      },
      {
        path: 'reorder',
        component: () => import('@/views/reorder/index.vue'),
      },
      {
        path: 'float',
        component: () => import('@/views/Floating/index.vue'),
      },
      {
        path: 'swiper',
        component: () => import('@/views/Swiper/index.vue'),
      },
      {
        path: 'swiper-loop',
        component: () => import('@/views/Swiper-Loop/index.vue'),
      },
      {
        path: 'local-storage',
        component: () => import('@/views/localstorage/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
