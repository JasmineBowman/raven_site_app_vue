<template>
  <div class="container">
    <h1>User Show</h1>
    <form v-on:submit.prevent="showUser(user)">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="user.name" />
      Email:
          <input type="text" v-model="user.email" />
      Phone:
          <input type="text" v-model="user.phone" />
      High School:
      <input type="text" v-model="user.high_school" />
      <input type="submit" value="Show" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
    });
  },
  methods: {
    showUser: function(user) {
      var params = {
        id: user.id, 
        name: user.name,
        email: user.email,
        phone: user.phone,
        high_school: user.high_school
      };
      axios
        .patch("/api/users/" + user.id, params)
        .then(response => {
          this.$router.push("/users");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>