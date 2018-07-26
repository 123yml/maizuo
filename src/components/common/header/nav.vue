<template>
	<div class='nav-list'>
		<transition 
			enter-active-class='animated fadeIn'
			leave-active-class='animated fadeOut'>
			<div class="mask" @click='$emit("close")' v-if='isshow'></div>
		</transition>
		<transition
			enter-active-class='animated slideInLeft'
			leave-active-class='animated slideOutLeft'>
			<ul @click.stop v-if='isshow'>
				<router-link
					tag='li'
				 	v-for='item in list'
				 	:key='item.id'
				 	:to='item.path'>
					{{ item.title }}
					<i class="fa fa-angle-right"></i>
				</router-link>
			</ul>
		</transition>
	</div>
</template>	

<script>
	export default{ 
		name:'NavList',
		props:['isshow'],
		data(){
			return {
				list:[
					{id : 1, title : '首页', path : '/home'},
					{id : 2, title : '影片', path : '/films'},
					{id : 3, title : '影院', path : '/cinama'},
					{id : 5, title : '我的', path : '/mine'},
				]
			}
		}
	}
</script>

<style scoped lang='scss'>
	.nav-list{
		position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    color: #9a9a9a;
	    z-index: 499;
		.mask{
			background: rgba(0,0,0, .4);
		    position: absolute;
		    top: 50px;
		    right: 0;
		    left: 0;
		    transition: all ease 0.4s;
		    -webkit-transition: all ease 0.4s;
		    height: 100vh;
		}
		ul{
			border-top: 1px solid #222;
		    box-shadow: 0 1px 1px #363636 inset;
		    background: #282828;
		    position: absolute;
		    display: block;
		    top: 50px;
		    right: 110px;
		    left: 0;
		    transition: all ease 0.4s;
		    -webkit-transition: all ease 0.4s;
		    height: 100vh;
			font-size: .12rem;
			padding:0 .1rem;
			li{
				line-height: 50px;
		    	display: flex;
		    	justify-content: space-between;
		    	align-items: center;
		    	padding: 0 16px;
				border-bottom: 1px dotted #333;
			}
		}
	}
</style>