<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
}
body {
  margin: 0;
  color: #424242;
}
.btn {
  margin: 0.5rem 0;
  color: white;
  background-color: #0099FF;
  border: none;
  border-radius: 4px;
  height: 36px;
  width: 120px;
  cursor: pointer;
}

</style>
