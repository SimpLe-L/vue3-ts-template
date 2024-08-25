import { createRouter, createWebHistory } from 'vue-router';
import routes from './modules';

console.log('routes', routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
