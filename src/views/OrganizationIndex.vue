<template>
  <div class="OrganizationIndex">

          <!-- Banner -->
            <section id="banner">
              <header>
                <h2>Howdy. This is Dopetrope.</h2>
                <p>A responsive template by HTML5 UP</p>
              </header>
            </section>

          <!-- Intro -->
            <section id="intro" class="container">
              <div class="row">
                <div class="col-4 col-12-medium">
                  <section class="first">
                    <i class="icon solid featured fa-cog"></i>
                    <header>
                      <h2>Ipsum consequat</h2>
                    </header>
                    <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                  </section>
                </div>
                <div class="col-4 col-12-medium">
                  <section class="middle">
                    <i class="icon solid featured alt fa-bolt"></i>
                    <header>
                      <h2>Magna etiam dolor</h2>
                    </header>
                    <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                  </section>
                </div>
                <div class="col-4 col-12-medium">
                  <section class="last">
                    <i class="icon solid featured alt2 fa-star"></i>
                    <header>
                      <h2>Tempus adipiscing</h2>
                    </header>
                    <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                  </section>
                </div>
              </div>
              <footer>
                <ul class="actions">
                  <li><a href="#" class="button large">Get Started</a></li>
                  <li><a href="#" class="button alt large">Learn More</a></li>
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
                      <h2>My Portfolio</h2>
                    </header>
                    <div class="row">
                      
  
                   
                      <div class="col-4 col-6-medium col-12-small" v-for="organization in organizations">
                        <section class="box">
                          <a href="#" class="image featured"><img src="images/pic07.jpg" alt="" /></a>
                          <header>
                            <h3>Dolore nisl feugiat</h3>
                          </header>
                          <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                          <footer>
                            <ul class="actions">
                              <li><a href="#" class="button alt">Find out more</a></li>
                            </ul>
                          </footer>
                        </section>
                      </div>
                    </div>
                  </section>

              </div>
              <div class="col-12">

                <!-- Blog -->
                  <section>
                    <header class="major">
                      <h2>The Blog</h2>
                    </header>
                    <div class="row">
                      <div class="col-6 col-12-small">
                        <section class="box">
                          <a href="#" class="image featured"><img src="images/pic08.jpg" alt="" /></a>
                          <header>
                            <h3>Magna tempus consequat</h3>
                            <p>Posted 45 minutes ago</p>
                          </header>
                          <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                          <footer>
                            <ul class="actions">
                              <li><a href="#" class="button icon solid fa-file-alt">Continue Reading</a></li>
                              <li><a href="#" class="button alt icon solid fa-comment">33 comments</a></li>
                            </ul>
                          </footer>
                        </section>
                      </div>
                      <div class="col-6 col-12-small">
                        <section class="box">
                          <a href="#" class="image featured"><img src="images/pic09.jpg" alt="" /></a>
                          <header>
                            <h3>Aptent veroeros aliquam</h3>
                            <p>Posted 45 minutes ago</p>
                          </header>
                          <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                          <footer>
                            <ul class="actions">
                              <li><a href="#" class="button icon solid fa-file-alt">Continue Reading</a></li>
                              <li><a href="#" class="button alt icon solid fa-comment">33 comments</a></li>
                            </ul>
                          </footer>
                        </section>
                      </div>
                    </div>
                  </section>

              </div>
            </div>
          </div>
        </section>
    <h1>{{ message }}</h1>

      <div v-for="organization in organizations">

      <p>Name: {{ organization.name }}</p>
      <p>Industry: {{ organization.industry }}</p>
      <p>Description: {{ organization.description }}</p>
      <p>Email: {{ organization.email }}</p>
      <p>Phone: {{ organization.phone }}</p>
      <p>Zip: {{ organization.zip }}</p>

      <router-link v-bind:to="`/organizations/${organization.id}`">Click for Details on the Organization</router-link>
      </div>
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

