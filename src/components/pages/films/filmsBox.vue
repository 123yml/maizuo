<template>	
	<div class="filmbox">
		<ul>
			<li is='films-item'></li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import FilmsItem from './filmsItem.vue';

	export default{
		name : 'filmsBox',
		components : {
			FilmsItem
		}
	}
</script>

<style scoped lang='scss'>
	ul{
		width: 2.9rem;
		margin: 0 auto;
	}
</style>