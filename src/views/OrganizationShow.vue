<template>
      <div class="container">
        <section>
          <header class="major">
            <h2>ORGANIZATION DETAILS</h2>
          </header>
          <p>Name: {{ organization.name }}</p>
          <p>Industry: {{ organization.industry }}</p>
          <p>Description: {{ organization.description }}</p>
          <p>Email: {{ organization.email }}</p>
          <p>Phone: {{ organization.phone }}</p>
          <p>Zip: {{ organization.zip }}</p>
          <img v-bind:src="organization.image_url" v-bind:alt="organization.name">
        </section>
      </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      organization: {},
    };
  },
  created: function() {
    axios.get('/api/organizations/' + this.$route.params.id).then(response => {
      this.organization = response.data;
    });
  },
  methods: {}
};

</script>