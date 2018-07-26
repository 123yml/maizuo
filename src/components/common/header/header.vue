<template>
	<header>
		<nav class="toolbar"  @click='$emit("close")'>
			<div class="left">
				<div class="title-icon" @click='isshow=!isshow'>
					<i class="fa fa-navicon"></i>
				</div>
				<div class="title">
					卖座电影
				</div>
			</div>
			<div class="right">
				<div class="city" @click='chgrt'>
					成都
					<i class="fa fa-angle-down"></i>
				</div>
				<div class="user">
					<i class="fa fa-user-o"></i>
				</div>
			</div>
		</nav>
		<nav-list @close='isshow=false' :isshow='isshow'></nav-list>
	</header>
</template>	

<script>
	import NavList from './nav.vue';
	import 'animate.css';
	// import bus from '../../../javascript/bus.js';
	import router from '../../../router/index.js'

	export default{
		name:'AppHeader',
		components:{
			NavList
		},
		data(){
			return {
				isshow:false
			};
		},
		methods : {
			navClose(){
				this.isshow = false;
			},
			chgrt(){
				this.$router.push('/addr');
			}
		},
		created(){
			// bus.$on('navClose',this.navClose)
			router.beforeEach((to, from, next)=>{
				this.navClose();
				next();
			})
		}
		
	};
</script>

<style scoped lang='scss'>
header{
	height:.5rem;
	width: 100%;
	.toolbar{
		background: #282828;
	    position: fixed;
	    z-index: 500;
	    top: 0;
	    right: 0;
	    left: 0;
	    width: auto;
	    height: 0.5rem;
	    line-height: .5rem;
	    overflow: hidden;
		.left{
			color: #fff;
		    font-size: .16rem;
		    line-height: .5rem;
		    text-align: left;
		    text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
		    width: auto;
		    height: .5rem;
		    margin: 0 auto;
		    float: left;
			 .title-icon {
		    	float: left;
			    width: .48rem;
			    text-align: center;
			    border-right: 1px solid #222;
			    box-shadow: 1px 0 1px #363636;
			    color: #999;
		    }

		    .title {
		    	padding: 0 1em;
			    float: left;
			    font-size: 14px;
			    color: #efefef;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    display: inline-block;
			    overflow: hidden;
		    }
		}
		.right {
	    	float: right;
	    	color: #999;
	    	.city {
	    		float: left;
			    font-size: .14rem;
	    	}
	    	.user {
	    		float: left;
			    font-size: 0.16rem;
			    width: .6rem;
			    text-align: center;
	    	}
	    }
		
	}
}
</style>