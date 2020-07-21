<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header/header.vue";
export default {
  name: "app",
  components: {
    Header
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>

<style>
body,
html {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
