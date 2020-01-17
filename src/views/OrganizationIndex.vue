<template>
  <div class="OrganizationIndex">
      <!-- Main -->
        <section id="main">
          <div class="container">
            <div class="row">
              <div class="col-12">
                  <section>
                    <header class="major">
                      <h2>ORGANIZATIONS</h2>
                    </header>
                    <div class="row">
                      <div class="col-4 col-6-medium col-12-small" v-for="organization in organizations">
                        <section class="box">
                        <img v-bind:src="organization.image_url" v-bind:alt="organization.name">
                      
                          <p>Name: {{ organization.name }}</p>
                          <p>Industry: {{ organization.industry }}</p>
                          <p>Description: {{ organization.description }}</p>
                          <p>Email: {{ organization.email }}</p>
                          <p>Phone: {{ organization.phone }}</p>
                          <p>Zip: {{ organization.zip }}</p>
                            <ul class="actions">
                              <li><router-link v-bind:to="`/organizations/${organization.id}`"> <button>Show All Info</button></router-link></li>
                            </ul>
                          <footer>
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
export default {
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

