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
				<li v-for='item in list' :key='item.id'>
					{{ item.title }}
					<i class="fa fa-angle-right"></i>
				</li>
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
					{id : 1, title : '首页'},
					{id : 2, title : '影片'},
					{id : 3, title : '影院'},
					{id : 4, title : '商城'},
					{id : 5, title : '我的'},
				]
			}
		}
	}
</script>

<style scoped lang='scss'>
	.nav-list{
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		color: #9a9a9a; 
		.mask{
			position: absolute;
			top: 0.5rem;
			bottom: 0;
			left: 0;
			right: 0;
			background: rgba(0,0,0, .2);
			z-index: 1;
		}
		ul{
			border-top: 1px solid #222;
			position: absolute;
			z-index: 2;
			background: #282828;
			width:2.3rem;
			left: 0;
			bottom: 0;
			top:0.5rem;
			
			li{
				line-height: 0.5rem;
				font-size: 0.12rem;
				padding:0 0.17rem;
				border-bottom: 1px dotted #333;
				i{
					float: right;
					line-height: 0.5rem;
				}
			}
		}
	}
</style>