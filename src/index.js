import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
require('./styles.scss');

Vue.use(VueRouter);

const routes = [
  {path: '/:meeting/:user', component: App},
  {path: '/', component: App}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

var app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
