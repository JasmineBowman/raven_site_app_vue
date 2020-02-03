<template>
<div class="container">
  <div id="app">
    <div id="page-wrapper">

    <div class="home">
      <h1>{{ message }}</h1>
    </div>

    <header class="major">
    <h2>WORK/COMMUNITY SERVICE EXPERIENCE APPLICATION FORM</h2>
    </header>

    <header class="major">
    <h2>STUDENT INFORMATION</h2>
    </header>

      <div class="form-group">
        <label for="name">Name</label>
        <input type="text"
           id="name"
           class="form-control"
           v-model="userData.name">
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email"
           id="email"
           class="form-control"
           v-model="userData.email">
      </div>

      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="phone"
           id="phone"
           class="form-control"
           v-model="userData.phone">
      </div>

      <div class="form-group">
        <label for="high_school">High School Name</label>
        <input type="text"
          id="text"
          class="form-control"
          v-model="userData.high_school">
      </div>
    </div>
  </div>

      <br>

      <br>

    <header class="major">
      <h2>ORGANIZATION INFORMATION</h2>
    </header>

      <div class="form-group">
        <label for="organizationname">Organization Name</label>
        <input type="text"
           id="organizationname"
           class="form-control"
           v-model="organizationData.name">
      </div>

      <div class="form-group">
        <label for="organizationindustry">Organization Industry</label>
        <input type="text"
           id="organizationindustry"
           class="form-control"
           v-model="organizationData.industry">
      </div>

      <div class="form-group">
        <label for="organizationemail">Organization Email</label>
        <input type="email"
           id="organizationemail"
           class="form-control"
           v-model="organizationData.email">
      </div>

      <div class="form-group">
        <label for="organizationphone">Organization Phone</label>
        <input type="phone"
           id="organizationphone"
           class="form-control"
           v-model="organizationData.phone">
      </div>

      <div class="form-group">
        <label for="organizationzip">Organization Zip</label>
        <input type="text"
           id="organizationzip"
           class="form-control"
           v-model="organizationData.zip">
      </div>

    <button v-on:click="apply"> Apply! </button>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      userData: {
        name: "",
        email: "",
        phone: "",
        high_school: "",
      },
      organizationData: {
        name: "",
        industry: "",
        description: "",
        email: "",
        phone: "",
        zip: "",
      },
      message: "Thank you for your Application! We'll contact you soon.",
      isSubmitted: false,
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/users/23').then(response => {
      this.userData = response.data; 
    }),
    axios.get('http://localhost:3000/api/organizations/' + this.$route.query.organization_id).then(response => {
      this.organizationData = response.data; 
    });
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    },
    apply: function() {
      console.log('apply')
      var params = {
        organization_id: this.organizationData.id
      };
      axios
        .post("/api/applications", params)
        .then(response => {
          this.$router.push("/home");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    } 
  }
};
</script>
