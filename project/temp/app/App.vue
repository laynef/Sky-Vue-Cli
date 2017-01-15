<template>
  <div id="app">
    <img src="./assets/logo.png">
    <greeting></greeting>
  </div>
</template>

<script>
import greeting from './components/Greeting'

export default {
  name: 'app',
  components: {
    greeting
  }
}
</script>

<style lang="sass">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
