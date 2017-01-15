<template>
  <div id="app">
    <greeting></greeting>
  </div>
</template>

<script>
import Greeting from './components/Greeting'

export default {
  name: 'app',
  components: {
    Greeting
  }
}
</script>

<style lang="sass">
  html {
    background: url('http://images4.fanpop.com/image/photos/19900000/SunSet-sunsets-and-sunrises-19955107-2560-1817.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
