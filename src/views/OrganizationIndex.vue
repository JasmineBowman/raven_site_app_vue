<template>
  <div class="OrganizationIndex">
    <h1>{{ message }}</h1>

      <div v-for="organization in organizations">

      <p>Name: {{ organization.name }}</p>
      <p>Industry: {{ organization.industry }}</p>
      <p>Description: {{ organization.description }}</p>
      <p>Email: {{ organization.email }}</p>
      <p>Phone: {{ organization.phone }}</p>
      <p>Zip: {{ organization.zip }}</p>

      <router-link v-bind:to="`/organizations/${organization.id}`">Click for Details on the Organization</router-link>
      </div>
    </div>
</template>

<script>
import axios from "axios";
// import Vue2Filters from 'vue2-filters';
export default {
  // mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Organizations Index",
      organizations: []
    };
  },
  created: function() {
    axios.get('/api/organizations').then(response => {
      this.organizations = response.data;
    });
  },
  // created: function() {
  //   axios.get("/api/organizations/" + this.$route.params.id).then(response => {
  //     this.organizations = response.data;
  //   });
  // },
  // methods: {},
  // indexOrganization: function(organization) {
  //   var params = {
  //     id: organization.id, 
  //     name: organization.name,
  //     industry: organization.industry,
  //     description: organization.description,
  //     email: organization.email,
  //     phone: organization.phone,
  //     zip: organization.zip
  // //   };
  //   axios.get("/api/organizations/");
  //     .then(response => {
  //       this.$router.push("/organizations");
  //     })
  //     .catch(error => {
  //       this.errors = error.response.data.errors;
  //     });
  // },
};
</script>

