<template>
	<div class="swiper-container banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide"
        	 v-for='banner in banners'
        	 :key='banner.id'>
        	 <img :src='banner.imageUrl'>
        </div>
        
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>    
    
</div>
</template>

<script type="text/javascript">

	import Swiper from 'swiper';
	import axios from 'axios';
	import "swiper/dist/css/swiper.min.css";

	export default{
		name:'Banner',
		data(){
			return {
				banners : []
			}
		},
		methods : {
			getJson(){
				axios.get('/static/moke/banner.json').then(res=>{
					this.banners = res.data
				});
			}
		},
		created(){
			this.getJson();
		},
		updated(){
			new Swiper('.swiper-container',{
				loop:true,
				autoplay:true
			})
		}
	}
</script>

<style scoped lang='scss'>
	.banner{
		display: block;
		position: relative;
		overflow: hidden;
	    margin: 0;
	    padding: 0;
	    width: 100%;
	    img{
	    	width: 100%;
	    }
	}
</style>