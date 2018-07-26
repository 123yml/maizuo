<template>	
	<div class="filmnav">
		<div v-for='navtype in navTypes'
			:key='navtype.id'
			class='nav'
			:class='{active:type===navtype.type}'
			@click='search(navtype.type)'>
			{{ navtype.desc }}
		</div>
	</div>
	
</template>

<script type="text/javascript">
	export default{
		name : 'filmsNav',
		data(){
			return {
				type : 'now-playing',
				navTypes: [
					{id: 1, type: 'now-playing', desc: '正在热映'},
					{id: 2, type: 'coming-soon', desc: '即将上映'}
				]
			};
		},
		methods : {
			search(type){
				console.log(type,this.type)
				this.type = type;
			}
		}
	}
</script>

<style scoped lang='scss'>
	.filmnav{
		height: .5rem;
		width: 2.9rem;
		margin:0 auto;
		border-bottom: 0.01rem solid #fe6e00;
		
		.nav{
			color: #6a6a6a;
			font-size: .14rem;
			width:50%;
			float: left;
			height: 100%;
			text-align: center;
			line-height: .5rem;
			cursor: pointer;
			&.active{
				color: #fe6e00;
    			border-bottom: solid;
			}
		}
	}
</style>