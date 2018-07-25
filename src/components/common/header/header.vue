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
				<div class="city">
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

	export default{
		name:'AppHeader',
		components:{
			NavList
		},
		data(){
			return {
				isshow:false
			};
		}
		
		
	};
</script>

<style scoped lang='scss'>
header{
	height:.5rem;
	.toolbar{
		height: 0.5rem;
		background: #282828;
		color:white;
		line-height: 0.5rem;
		overflow: hidden;
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		z-index: 555;
		.left{
			color: #fff;
		    font-size: 0.14rem;
		    line-height: 0.5rem;
		    text-align: left;
		    text-shadow: 0 -0.01rem 0 rgba(0,0,0,0.8);
		    width: auto;
		    height: 0.5rem;
		    margin: 0 auto;
		    float: left;
			.title-icon {
		    	float: left;
			    width: 0.48rem;
			    text-align: center;
			    border-right: 0.01rem solid #222;
			    box-shadow: 0.01rem 0 0.01rem #363636;
			    color: #999;
		    }

		    .title {
		    	padding: 0 1em;
			    float: left;
			    font-size: 0.14rem;
			    color: #efefef;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    displdday: inline-block;
			    overflow: hidden;
		    }
		}
		.right{
			float: right;
			font-size: 0.14rem;
			color: #999;
			.city{
				float: left;
			}
			.user{
				float: right;
				padding:0 0.17rem;
			}
		}
		
	}
}
</style>