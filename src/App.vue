<template>
  <div id="app">
    <mindmap
			:nodes="nodes"
			:connections="connections"
			:editable="true"
		/>
  </div>
</template>

<script>
import map from "./map";

export default {
  name: 'App',
  data() {
    return { ...map };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
