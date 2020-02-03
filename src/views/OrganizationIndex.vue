<template>
  <div class="OrganizationIndex">
    <header class="major">
      <h2>ORGANIZATIONS</h2>
    </header>
      <div class="container">
          <div class="row">
            <div class="col-4 col-6-medium col-12-small" v-for="organization in organizations">
              <section class="box">
              <img v-bind:src="organization.image_url" v-bind:alt="organization.name">
              <p label class="form-text-alt">Name: {{ organization.name }}</p>
              <p label class="form-text-alt">Industry: {{ organization.industry }}</p>
              <router-link v-bind:to="`/organizations/${organization.id}`"> <button>Show All Info</button></router-link>
            </section>
          </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      organizations: []
    };
  },
  created: function() {
    axios.get('/api/organizations').then(response => {
      this.organizations = response.data;
    });
  },
};
</script>

