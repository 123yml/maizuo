<template>
  <div id="app">
    <app-header @click='$emit("close")'></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from './components/common/header/header.vue';
  import Home from './components/pages/home/home.vue';

  export default{
    name:'App',
    components:{
      AppHeader,
      Home
    }
  }

</script>

<style>


</style>
