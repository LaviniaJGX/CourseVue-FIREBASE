<template>
  <header>
    <div>
      <p>Like this Sample Vue App? You can find the Step-by-Step guide on how to build it.<a href ="https://vuejs.org/">here</a>
      </p>
      <p>
        {{footerTitle}}
      </p>
    </div>
  </header>
</template>

<script>

export default {
  props: {
    footerTitle: {
      type: String
    }
  }
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
