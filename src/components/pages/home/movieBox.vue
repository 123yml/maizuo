<template>
	<div class="movie">
		<div v-if='type.url_type=="coming-soon"' class='coming'>
			即将上映
		</div>
		<dl is='movieItem'
			v-for='movie in movies'
			:key='movie.id'
			:movie='movie'
			:type='type'>
		</dl>

		<div class='more'>更多{{ type.title }}电影</div>

	</div>
</template>

<script>
	import movieItem from './movieItem.vue';
	import axios from 'axios';
	export default{
		name : 'MovieBox',
		props : ['type'],
		components : {
			movieItem
		},
		data(){
			return {
				movies : [],
				page : 1
			}
		},
		methods : {
			loadMovie(){
				axios.get('http://localhost:8080/mz/v4/api/film/' + this.type.url_type,{
					params:{
						page : this.page,
						count : this.type.count,
						__t : Date.now()
					}
				}).then(res=>{
					this.movies = res.data.data.films;
				})
			}
		},
		created(){
			this.loadMovie();
		}
	}

</script>

<style scoped lang='scss'>
	.movie{
		.coming{
			border-bottom: -0.1rem;
			maigin: .3rem auto;
		}
		.more{
			font-size: .12rem;
			height: .3rem;
			width: 1.6rem;
			border-radius: .3rem;
			border: 1px solid ;
			margin: 0 auto;
			text-align: center;
			line-height: .3rem;

		}
	}
</style>