<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email: {{ email }}</p>
    <p>Your country: {{ country }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      country: ""
    };
  },
  created() {
    axios.get("/users.json").then(res => {
      const users = [];
      const data = res.data;
      for (let key in data) {
        const user = data[key];
        user.id = key;
        users.push(user);
      }
      console.log(users);
      this.email = users[0].email;
      this.country = users[0].country;
    });
  }
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>
