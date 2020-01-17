<template>
  <div class="home">
    <section id="main">
        <div class="container">
          <div class="row">
            <div class="col-4 col-12-medium">
            </div>
      <div class="col-8 col-12-medium imp-medium">
    <section id="intro" class="container">
      <div class="row">
        <div class="col-4 col-12-medium">
          <section class="first">
            <i class="icon solid featured fa-cog"></i>
            <header>
              <h2>Who</h2>
            </header>
            <p>Blah Blah Blah.</p>
          </section>
        </div>
      <div class="col-4 col-12-medium">
          <section class="middle">
            <i class="icon solid featured alt fa-bolt"></i>
            <header>
              <h2>What</h2>
            </header>
            <p>Yada Yada Yada.</p>
          </section>
        </div>
      <div class="col-4 col-12-medium">
        <section class="last">
          <i class="icon solid featured alt2 fa-star"></i>
          <header>
            <h2>Where</h2>
          </header>
          <p>The CLE.</p>
        </section>
      </div>
    </div>
      </section>
              </div>
            </div>
          </div>
        </section>
      <div class="container">
        <div class="row">
          <div class="col-12">

          <!-- Portfolio -->
            <section>
              <div class="row">
                <div class="col-4 col-6-medium col-12-small">
                </div>
                <div class="col-4 col-6-medium col-12-small">
                </div>
                <div class="col-4 col-6-medium col-12-small">
                </div>
                <div class="col-4 col-6-medium col-12-small">
                </div>
                <div class="col-4 col-6-medium col-12-small">
                </div>
                <div class="col-4 col-6-medium col-12-small">
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
                            <h3>Seniors</h3>
                            <p>Posted 45 minutes ago</p>
                          </header>
                          <p>My life is so much better.</p>
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
                            <h3>Supervisors</h3>
                            <p>Posted 45 minutes ago</p>
                          </header>
                          <p>Work is super satisfying.</p>
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
    <h1>{{ message }}</h1>
                <section>
                  <header>
                    <h2 class="form-text">Important Dates</h2>
                  </header>
                  <ul class="dates">
                    <li>
                      <span class="date">Jun<strong>7</strong></span>
                      <h3><a href="#" class="form-text">Graduation!</a></h3>
                      <p class="form-text">Quote.</p>
                    </li>
                    <li>
                      <span class="date">May<strong>15</strong></span>
                      <h3><a href="#" class="form-text">Alternative Credits Due</a></h3>
                      <p class="form-text"> Details, Forms Due, Send Email, Send Appt</p>
                    </li>
                    <li>
                      <span class="date">Apr<strong>30</strong></span>
                      <h3><a href="#" class="form-text">Second Meeting Due</a></h3>
                      <p class="form-text">Forms - Reminders - Notes.</p>
                    </li>
                    <li>
                      <span class="date">Mar 31<strong>12</strong></span>
                      <h3><a href="#" class="form-text">First Meeting Due.</a></h3>
                      <p class="form-text">Forms - Reminders - Notes.</p>
                    </li>
                    <li>
                      <span class="date">Feb 15 <strong>10</strong></span>
                      <h3><a href="#" class="form-text">Alternate Program Period Begins</a></h3>
                      <p class="form-text">Some Reminders.</p>
                    </li>
                  </ul>
                </section>





<!--     <p>Search for Organizations HERE ->:<input type="text" v-model="searchTerm" list="names"></p>
    <datalist id="names">
      <option v-for="organization in organizations">{{ organization.name }}</option>
    </datalist>
    <br>
    <br>
    <br>
   <div v-for="organization in filterBy(organizations, searchTerm, 'name')" v-bind:class="{selected: organization.selected}">
      <button v-on:click="selectOrganization(organization)">Select Organization</button>

    <button v-on:click="setSortAttribute('name')">Sort by Name</button> -->
    <hr>
  </div>

</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Raven Site!"
    };
  },
  created: function() {},
  methods: {}
};
</script>

