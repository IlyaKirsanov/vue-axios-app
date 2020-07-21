<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <h2>You should only get here if you're authenticated!</h2>
    <h3>Your email: {{ email }}</h3>

  </div>
</template>

<script>
export default {
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    }
  },
  created() {
    this.$store.dispatch("fetchUser");
  }
};
</script>

<style scoped>
h1,h2,h3,
p {
  text-align: center;
}

h2,h3,p {
  color: red;
}
</style>
