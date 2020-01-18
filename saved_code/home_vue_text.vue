<template>
  <div id="app">

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
            <p>Share your observations, suggestions and experience. We feel that as much an be learned from a negative experience as a positive experience. We encourage you to be both candid and self aware. Success and growth require both a willingness to learn and acceptance that .... </p>
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

    <div class="col-4 col-12-medium">
      <section>
        <header>
          <h2>What's this all about?</h2>
        </header>
        <a href="#" class="image featured"><img src="images/pic10.jpg" alt="" /></a>
        <p>
          This is <strong>Dopetrope</strong> a free, fully responsive HTML5 site template by
          <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net/">HTML5 UP</a> It's released for free under
          the <a href="http://html5up.net/license/">Creative Commons Attribution</a> license so feel free to use it for any personal or commercial project &ndash; just don't forget to credit us!
        </p>
        <footer>
          <ul class="actions">
            <li><a href="#" class="button">Find out more</a></li>
          </ul>
        </footer>
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

