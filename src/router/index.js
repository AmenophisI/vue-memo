import { createRouter, createWebHistory } from 'vue-router';
import Hoge from '../components/Hoge.vue'
import Moge from '../components/Moge.vue'

const routes = [
  {
    path: '/hoge',
    name: 'Hoge',
    component: Hoge
  },
  {
    path: '/moge',
    name: 'Moge',
    component: Moge
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;