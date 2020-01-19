<template>
  <div class="home">

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
                  <p>Share your observations, suggestions and experience. We feel that as much an be learned from a negative experience as a positive experience. We encourage you to be both candid and self aware. Success and growth require both a willingness to learn and acceptance that...</p>
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
                  <p>Share your experience, strength and hope.</p>
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

