import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/index.js';
import BasedCard from './components/ui/BasedCard.vue';
import BasedButton from './components/ui/BasedButton.vue';
import BasedBadge from './components/ui/BasedBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
createApp(App)
  .use(router)
  .use(store)
  .component('BasedCard', BasedCard)
  .component('BasedButton', BasedButton)
  .component('BasedBadge', BasedBadge)
  .component('BaseSpinner', BaseSpinner)
  .component('BaseDialog', BaseDialog)
  .mount('#app');
