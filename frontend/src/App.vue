<template>
  <div id="app">
    <div id="nav">
      <app-header/>
    </div>
    <router-view/>
  </div>
</template>
<script>
import HeaderComponent from "./components/Header";
export default {
  name: "app",
  components: {
    "app-header": HeaderComponent
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
