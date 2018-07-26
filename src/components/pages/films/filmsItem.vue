<template>	
	<li>
		<div class="image">
			<img src="img/npm.png" alt="">
		</div>
		<div class="list">
			<div class="one-row">
				<div class="name">我不是药神</div>
				<div class="grade">8.5</div>
				<i class="fa fa-angle-right"></i>
			</div>
			<div class="desc">一场拉锯战</div>
			<div class="film-count">97上映</div>
		</div>
	</li>
</template>

<script type="text/javascript">
	export default{ 
		name : 'filmsItem'
	}
</script>

<style scoped lang='scss'>
li{
	border-bottom: dashed 1px #c9c9c9;
	height: 1.1rem;
	.image{
		float:left;
		width: .5rem;
		height: .7rem;
		margin-left: .1rem;
		padding-top: .1.5rem;
	}
	.list{
		font-size: .12rem;
		padding-top: .2rem;
		.one-row{
			font-size: .14rem;
			line-height: .25rem;
			.name{
				float: left;
				margin-right: 1.15rem;			
			}
			.grade{
				color: #fc7103;
				float: left;
			}
			i{
				margin-left: .05rem;
				color: #8e8e8e;
			}
		}
		.desc{
			color: #8e8e8e;
			line-height: .25rem;
		}
		.film-count{
			line-height: .25rem;
			color: #8e8e8e;
		}
	}
}
</style>