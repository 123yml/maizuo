import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routers = new VueRouter({
	'' : {
		redirect : '/home'
	}
	'/home' : {
		path : '../components/pages/home/home.vue'
	},
	'/films' : {
		path : '../components//pages/films/films.vue'
	},
	'/notfound' : {
		path : '../components/pages/notfound.vue'
	},
	'**' : {
		redirect : "/notfound"
	}
});
export default {routers};