<template>
	<div class="home">
		<banner></banner>
		<movie-box v-for='type in types'
			:key='type.id'
			:type='type'>				
		</movie-box>
	</div>
</template>

<script>
	
	import Banner from './banner.vue';
	import MovieBox from './movieBox.vue';

	export default{
		name:'Home',
		components:{
			Banner,
			MovieBox
		},
		data(){
			return {
				types : [
					{id : 1, url_type : "now-playing", count : 5, title : '热映'},
					{id : 2, url_type : "coming-soon", count : 3, title : '即将上映'}
				]
			}
		}
	}
</script> 

<style scoped lang='scss'>

</style>