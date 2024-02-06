// main.js
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/HomeComp.vue';
import About from './components/aboutcomp.vue';
import blog from './components/blogcomp.vue';
import contact from './components/contactcomp.vue';
import './assets/styles/main.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/blog', component: blog },
  { path: '/contact', component: contact },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
