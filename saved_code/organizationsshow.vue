<template>
  <div class="OrganizationShow">
    <section id="main">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <section>
              <header class="major">
                <h2>ORGANIZATION DETAILS</h2>
              </header>



  <h1>Organization Show</h1>
    <p>Name: {{ organization.name }}</p>
    <p>Industry: {{ organization.industry }}</p>
    <p>Description: {{ organization.description }}</p>
    <p>Email: {{ organization.email }}</p>
    <p>Phone: {{ organization.phone }}</p>
    <p>Zip: {{ organization.zip }}</p>
    <img v-bind:src="organization.image_url" v-bind:alt="organization.name">
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Organization Details",
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