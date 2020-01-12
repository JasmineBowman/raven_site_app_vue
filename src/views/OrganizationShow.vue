<template>
  <div class="container">
    <h1>Organization Show</h1>
    <form v-on:submit.prevent="showOrganization(organization)">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="organization.name" />
      Industry:
          <input type="text" v-model="organization.industry" />
      Description:
          <input type="text" v-model="organization.description" />
      Email:
      <input type="text" v-model="organization.email" />
      Phone:
      <input type="text" v-model="organization.phone" />
      Zip:
      <input type="text" v-model="organization.zip" />
      <input type="submit" value="Show" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      organization: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/organizations/" + this.$route.params.id).then(response => {
      this.organization = response.data;
    });
  },
  methods: {
    showOrganization: function(organization) {
      var params = {
        id: organization.id, 
        name: organization.name,
        industry: organization.industry,
        description: organization.description,
        email: organization.email,
        phone: organization.phone,
        zip: organization.zip
      };
      axios
        .patch("/api/organizations/" + organization.id, params)
        .then(response => {
          this.$router.push("/organizations");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>