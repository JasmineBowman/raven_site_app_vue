<template>
  <div class="container">
  <h1>Organization Show</h1>
    <p>Name: {{ organization.name }}</p>
    <p>Industry: {{ organization.industry }}</p>
    <p>Description: {{ organization.description }}</p>
    <p>Email: {{ organization.email }}</p>
    <p>Phone: {{ organization.phone }}</p>
    <p>Zip: {{ organization.zip }}</p>
    <img v-bind:src="recipe.image_url">
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to Raven Site!",
      organization: {}
    };
  },
  created: function() {
    console.log('in the create)');
    axios.get('/api/organizations/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.organization = response.data;
    });
  },
  methods: {}
};
// import axios from "axios";
// export default {
//   data: function() {
//     return {
//       organization: {
//         name: "",
//         industry: "",
//         description: "",
//         email: "",
//         phone: "",
//         zip: ""       
//       },
//       errors: [],
//     };
//   },
//   created: function() {
//     axios.get('/api/organizations/' + this.$route.params.id).then(response => {
//       console.log(response.data);
//       this.organization = response.data;
//     });
//   },
// methods: {},
// showOrganization: function(organization) {
//   var params = {
//     id: organization.id, 
//     name: organization.name,
//     industry: organization.industry,
//     description: organization.description,
//     email: organization.email,
//     phone: organization.phone,
//     zip: organization.zip,
//   };
//   axios.get("/api/organizations/" + organization.id, params)
//     .then(response => {
//       this.$router.push("/organizations");
//     })
//     .catch(error => {
//       this.errors = error.response.data.errors;
//     });
// }
</script>