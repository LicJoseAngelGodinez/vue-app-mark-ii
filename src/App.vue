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

  $color-deep-dark: black;
  $color-dark: #171925;
  $color-light-dark: #262d30;
  $color-white: #fdfcfc;
  $color-teal: #71f8b3;
  $color-teal-arrow: #74f6b9;
  $color-initials: #f0f4f7; 
  $color-accepted: #61b792; 
  $color-rejected: #782035; 
  $color-inprocess: #c09552; 
  $color-gray-title: #7e828b;
  $color-breadcrumb: #a2a3a8;
  $color-breadcrumb-selected: #65686f;

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