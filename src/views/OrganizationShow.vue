<template>
      <div class="container">
        <section>
          <header class="major">
            <h2>ORGANIZATION DETAILS</h2>
          </header>
          <p label class="form-text">Name: {{ organization.name }}</p>
          <p label class="form-text">Industry: {{ organization.industry }}</p>
          <p label class="form-text">Description: {{ organization.description }}</p>
          <p label class="form-text">Email: {{ organization.email }}</p>
          <p label class="form-text">Phone: {{ organization.phone }}</p>
          <p label class="form-text">Zip: {{ organization.zip }}</p>
          <img v-bind:src="organization.image_url" v-bind:alt="organization.name">
          <button><a v-bind:href="'/applicationforms/new?organization_id='+organization.id"> Submit Your Application Today! </a></button>

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