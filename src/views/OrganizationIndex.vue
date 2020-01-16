<template>
  <div class="OrganizationIndex">
          <!-- Banner -->
            <section id="banner">
              <header>
                <h2>Welcome to Raven Site</h2>
              </header>
            </section>
          <!-- Intro -->
            <section id="intro" class="container">
              <div class="row">
                <div class="col-4 col-12-medium">
                  <section class="first">
                    <i class="icon solid featured fa-cog"></i>
                    <header>
                      <h2>Who</h2>
                    </header>
                    <p>Organization dedicated to working with high school students who taking an alternate path to graduation.</p>
                  </section>
                </div>
                <div class="col-4 col-12-medium">
                  <section class="middle">
                    <i class="icon solid featured alt fa-bolt"></i>
                    <header>
                      <h2>What</h2>
                    </header>
                    <p>Raven site brings you the tools to navigate your path from student to graduate.</p>
                  </section>
                </div>
                <div class="col-4 col-12-medium">
                  <section class="last">
                    <i class="icon solid featured alt2 fa-star"></i>
                    <header>
                      <h2>How</h2>
                    </header>
                    <p>Contacts, Forms, Checklists even calendar reminders.</p>
                  </section>
                </div>
              </div>
              <footer>
                <ul class="actions">
                  <li><a href="#" class="button large">Get Started</a></li>
                  <li><a href="#" class="button large">Learn More</a></li>
                </ul>
              </footer>
            </section>

      <!-- Main -->
        <section id="main">
          <div class="container">
            <div class="row">
              <div class="col-12">

                <!-- Portfolio -->
                  <section>
                    <header class="major">
                      <h2>ORGANIZATIONS</h2>
                    </header>
                    <div class="row">
                      <div class="col-4 col-6-medium col-12-small" v-for="organization in organizations">
                        <section class="box">
                        <img v-bind:src="organization.image_url" v-bind:alt="organization.name">
                        <!--   <a href="#" class="image featured"><img src="images/officepic17.jpg" alt="" /></a> -->
                          <header>
                          </header>
                          <p>Name: {{ organization.name }}</p>
                          <p>Industry: {{ organization.industry }}</p>
                          <p>Description: {{ organization.description }}</p>
                          <p>Email: {{ organization.email }}</p>
                          <p>Phone: {{ organization.phone }}</p>
                          <p>Zip: {{ organization.zip }}</p>

                          <footer>
                            <ul class="actions">
                              <li><router-link v-bind:to="`/organizations/${organization.id}`"> <button>Show All Info</button></router-link></li> 
                            </ul>
                          </footer>
                        </section>
                      </div>
                    </div>
                  </section>
              </div>
              <div class="col-12">
              </div>
            </div>
          </div>
        </section>
    <h1>{{ message }}</h1>
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

