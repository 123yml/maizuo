// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './javascript/rem.js' 
import './stylesheets/main.scss'

import Vue from 'vue'
import App from './App'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false;
Vue.use(VueLazyLoad ,{
	loading : '/static/images/loading.png',
	preload : 0.2
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
