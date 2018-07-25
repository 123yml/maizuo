<template>
	<dl>
		<dt class="image">
			<img v-lazy="movie.cover.origin">
		</dt>
		<dd>
			<div class="left">
				<div class="name">
					{{ movie.name }}
				</div>
				<div class="count" v-if='type.url_type == "now-playing"'>
					{{ movie.cinemaCount }}家影院上映 {{ movie.watchCount }}人购票
				</div>				
			</div>
			<div class="right">
				<div class="grade" v-if='type.url_type=="now-playing"'>{{ movie.grade }}</div>
				<div class="date" v-else>{{ movie.premiereAt | time}}上映</div>
			</div>
		</dd>
		
	</dl>
</template>

<script>
	
	import axios from 'axios';

	export default{
		name : 'MovieItem',
		props : ['type', 'movie'],
		data(){
			return {
			}
		},
		filters : {
			time(value){
				let date = new Date(value);
				return date.getMonth() + '月' + date.getDate() + '日';
			}
		}
		
	}
</script>

<style scoped lang='scss'>
	dl{
		height: 2rem;
		width: 2.9rem;
		margin: .17rem auto;
		background: white;
		dt{
			height: 1.63rem;
			img{
				height: 100%;
				float: left;
			}
		}
		dd{
			height: 0.37rem;
			padding: 0 0.15rem;
			.left{
				float: left;
				width: 1.6rem;
				display: flex;
				align-content: space-around;
				align-items: center;
				height: 0.37rem;
				flex-wrap: wrap;
				font-size: 0.12rem;
				.name{
					font-size: 0.12rem;
				}
				.count{
					color: #9a9a9a;
				}
			}
			.right{
				float: right;
				line-height: 0.37rem;
				.grade{
					color: #f78360;
					font-size: .14rem;
				}
				.date{
					font-size: .12rem;
					color: #f78360;
				}
			}
		}
	}
</style>