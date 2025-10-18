import {createStore} from 'vuex';
import coachesModule from './modules/Coaches/index.js';
import requestsModule from './modules/Requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
});
export default store;