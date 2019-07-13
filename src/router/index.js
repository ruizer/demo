import Vue from 'vue';
import Router from 'vue-router';
import routes from './routers';

Vue.use(Router);
const router = new Router({
  routes,
});

router.afterEach(to => {
  document.title = (to.meta && to.meta.title) || 'demo';
});

export default router;
