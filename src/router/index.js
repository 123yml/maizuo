import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../components/pages/home/home.vue';
import films from '../components/pages/films/films.vue';
import notfound from '../components/pages/notfound.vue';
import login from '../components/pages/login/login.vue';
import cinama from '../components/pages/cinama/cinama.vue';
import mine from '../components/pages/mime/mine.vue';
import bus from '../javascript/bus.js';

Vue.use(VueRouter);

let router = new VueRouter({
	routes : [
		{
			path : '',
			redirect : '/home'
		},
		{
			path : '/home',
			component : home
		},
		{
			path : '/films',
			component : films
		},
		{
			path : '/login',
			component : login
		},
		{
			path : '/cinama',
			component : cinama
		},
		{
			path : '/mine',
			component : mine
		},
		{
			path : '/notfound',
			component : notfound
		},
		{
			path : '**',
			redirect : "/notfound"
		}
	]
});

// router.beforeEach((to, from, next)=>{
// 	bus.$emit('navClose');
// 	next();
// });

export default router; 