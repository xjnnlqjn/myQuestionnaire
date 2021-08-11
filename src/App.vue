<template>
  <div id="app">
  	<vHeader></vHeader>
  	<router-view></router-view>
  </div>
</template>

<script>
import vHeader from './components/Header'

export default {
  name: 'App',
  components: {
  	vHeader
  }
}

</script>

<style>
@import "style/reset.css";

#app {
  min-width: 110rem;
  height: 100%;
  font-family: arial;
  background-color: #efefef;
  overflow: auto;
}
</style>
