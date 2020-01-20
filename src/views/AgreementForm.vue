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
        <label for="name">Student Name</label>
        <input type="text"
           id="name"
           class="form-control"
           v-model="userData.name">
      </div>

      <div class="form-group">
        <label for="email">Student Email</label>
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
        <label for="highschool">Your High School Name</label>
        <input type="text"
          id="text"
          class="form-control"
          v-model="userData.highschool">
      </div>

      <div class="form-group">
          <label for="communityservice">
          <input type="checkbox"
               id="communityservice"
               value="communityService"
               v-model="checkboxOptions"> I'm choosing Community Service! 
          </label>
      </div>
  </div>
</div>
          <br>

          <div class="form-group">
          <label for="workengagement">
              <input type="checkbox"
                     id="workengagement"
                     value="workengagement"
                     v-model="workEngagement"> I'm choosing a Work Engagement!
          </label>
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

      <header class="major">
      <h2>ORGANIZATION INFORMATION</h2>
      </header>

      <div class="form-group">
        <label for="organizationname">Organization Name</label>
        <input type="text"
           id="organizationnamename"
           class="form-control"
           v-model="organizationData.name">
      </div>

      <div class="form-group">
        <label for="organizationaddress">Organization Address</label>
        <input type="text"
           id="organizationaddress"
           class="form-control"
           v-model="organizationData.address">
      </div>

      <div class="form-group">
        <label for="city_zipcode">City/Zip Code</label>
        <input type="text"
           id="city_zipcode"
           class="form-control"
           v-model="organizationData.city_zipcode">
      </div>

      <div class="form-group">
        <label for="organizationphone">Organization Phone</label>
        <input type="organizationphone"
           id="phone"
           class="form-control"
           v-model="organizationData.phone">
      </div>

      <button class="btn btn-primary"
        @click.prevent="submitted">Submit!
      </button>

      <div class="card" v-if="isSubmitted">
        <div class="card-body">
          <h4 class="card-title">Form Data</h4>

          <p>Email: <b>{{ userData.email }}</b></p>
          <p>Password: <b>{{ userData.password }}</b></p>
          <p style="white-space: pre">Message: <b>{{ message }}</b></p>
          <p>Checkbox Options:</p>
          <ul>
              <li v-for="item in checkboxOptions"><b>{{ item }}</b></li>
          </ul>
        </div>
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
        highschool: "",
      message: "Describe Your Experience",
      checkboxOptions: [],
      isSubmitted: false,
    },
  },

  created: function() {
    axios.get('http://localhost:3000/api/users/23').then(response => {
      this.userData = response.data; 
    });
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  }
};
</script>
