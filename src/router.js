import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';

import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceive.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },

    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      props: true,
      component: CoachDetails,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: RequestReceived,
      meta: { requiresAuth: true },
    },
    {
      path: '/authentication',
      component: UserAuth,
      meta: { requiresUnAuth: true },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  const isAuth = store.getters.isAuthenticated;
  if (to.meta.requiresAuth && !isAuth) {
    next({ path: '/auth', query: { redirect: to.path.replace(/^\//, '') } });
  } else if (to.meta.requiresUnauth && isAuth) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
