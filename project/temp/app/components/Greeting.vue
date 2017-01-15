<template>
  <div class="greeting">
      <h1>{{greet}}</h1>
  </div>
</template>

<script>
export default {
  name: 'greeting',
 data () {
    return {
      greet: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
h1 {
    text-align: center;
    font-size: 32px;
    color: white;
    text-shadow: 2px 2px black;
}
</style>
