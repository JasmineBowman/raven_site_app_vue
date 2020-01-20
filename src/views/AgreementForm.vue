<template>
<div class="container">
  <div id="app">
    <div id="page-wrapper">

    <header class="major">
    <h2>WORK/COMMUNITY SERVICE EXPERIENCE AGREEMENT FORM</h2>
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

  <header class="major">
    <h2>PARENT/GUARDIAN AND EMERGENCY CONTACT INFORMATION</h2>
  </header>

      <div class="form-group">
        <label for="parentguardianname">Name (Parent/Guardian)</label>
        <input type="text"
           id="parentguardianname"
           class="form-control">
      </div>

      <div class="form-group">
        <label for="address">Address</label>
        <input type="text"
           id="address"
           class="form-control">
      </div>

      <div class="form-group">
        <label for="city/zipcode">City/Zip Code</label>
        <input type="text"
           id="city/zipcode"
           class="form-control">
      </div>

      <div class="form-group">
        <label for="homephone">Home Phone</label>
        <input type="phone"
           id="homephone"
           class="form-control">
      </div>

      <div class="form-group">
        <label for="workphone">Work Phone</label>
        <input type="phone"
           id="workphone"
           class="form-control">
      </div>

      <div class="form-group">
        <label for="cellphone">Cell Phone</label>
        <input type="phone"
           id="cellphone"
           class="form-control">
      </div>

      <div class="form-group">
        <label for="emergencycontactnamephone">Emergency Contact Name and Phone</label>
        <input type="text"
           id="emergencycontactnamephone"
           class="form-control">
      </div>

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
      message: "Describe Your Experience",
      isSubmitted: false,
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/users/23').then(response => {
      this.userData = response.data; 
    }),
    axios.get('http://localhost:3000/api/organizations/11').then(response => {
      this.organizationData = response.data; 
    });
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  }
};
</script>
