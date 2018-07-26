<template>
	<div class="movie">
		<div v-if='type.url_type=="coming-soon"' class='divice'>
			<div class="coming">即将上映</div>
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
		.divice{
			position: relative;
		    margin-top: 30px 0;
		    border-bottom: 1px solid #a8a8a8;
			.coming{
				width: 65px;
			    height: 20px;
			    margin: 0 auto;
			    margin-bottom: -10px;
			    border-radius: 5px;
			    font-size: 10px;
			    line-height: 20px;
			    text-align: center;
			    color: #eee;
			    background-color: #a7a7a7;
			}
		}
		
		
		.more{
			font-size: .12rem;
			height: .3rem;
			width: 1.6rem;
			border-radius: .3rem;
			border: 1px solid #aaa;
			margin: 0 auto;
			text-align: center;
			color: #616161;
			line-height: .3rem;

		}
	}
</style>