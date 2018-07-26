<template>
	<div class="films">
		<film-nav></film-nav>
		<film-box></film-box>
	</div>
</template>

<script>
	import filmNav from './filmsNav.vue';
	import filmBox from './filmsBox.vue';
	export default{
		name : 'Films',
		components :{
			filmNav,
			filmBox
		}
	}
</script>

<style scoped lang='scss'>
	
</style>
