<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">

  @import "./styles/GlobalStyles.scss";

  body {
    background-color: $color-deep-dark !important;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $color-white;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: $color-white;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>