<template>
  <div class="home">

    <!-- Important Dates -->
          <div class="col-8 col-12-medium">
            <section>
              <header>
                <h2>IMPORTANT DATES</h2>
              </header>
              <ul class="dates">
                <li>
                  <span class="date">Feb <strong>18</strong></span>
                  <h3><a href="#">Last Day for Community Service or Career Path Approvals</a></h3>
                </li>
                <li>
                  <span class="date">Mar <strong>23</strong></span>
                  <h3><a href="#">Initial Supervisor Meeting Reports Due</a></h3>
                </li>
                <li>
                  <span class="date">Apr <strong>20</strong></span>
                  <h3><a href="#">Mid-Point (second) Supervisor Reports Due</a></h3>
                </li>
                <li>
                  <span class="date">May <strong>18</strong></span>
                  <h3><a href="#">Final Supervisor Meeting Reports Due.</a></h3>
                </li>
                <li>
                  <span class="date">Jun <strong>12</strong></span>
                  <h3><a href="#">GRADUATION DAY!</a></h3>
                </li>
              </ul>
            </section>
          </div>


  </div>
</template>

<script>

export default {
  name: 'app',
  data: function() {
    return { showDate: new Date() };
  },
  created: function() {},
  methods: {
    setShowDate(d) {
      this.showDate = d;
    },
  }
};
</script>

<style>
</style>

