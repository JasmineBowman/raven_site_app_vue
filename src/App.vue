<template>
  <div id="app">
    <div id="page-wrapper">
      <nav id="nav">
        <ul>
          <li class="current">
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/home">Navigate</a>
            <ul>
              <li><a href="/signup">Sign Up!</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/organizations">Participating Organizations</a></li>
              <li><a href="/applicationforms/new">Application Form</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </li>
        </ul>
      </nav>

            <!-- Footer -->
            <section id="footer">
              <div class="container">
                <div class="row">

    <router-view/>
                  <div class="col-4 col-12-medium">
                    <section>
                      <header>
                        <h2>What's this all about?</h2>
                      </header>
                      <a href="#" class="image featured"><img src="images/ravenstree.jpeg" alt="" /></a>
                      <p>
                        <strong>Raven Site</strong> is a free app specifically designed to support high school seniors as they pursue and engage in either (or both) community service and/or work engagements that will earn them the opportunity to graduate! 
                      </p>
                      <footer>
                        <ul class="actions">
                          <li><a href="#" class="button">Find out more</a></li>
                        </ul>
                      </footer>
                    </section>
                  </div>
                  <div class="col-4 col-12-medium">
                    <section>
                      <header>
                        <h2>Connect & Communicate</h2>
                      </header>
                      <ul class="social">
                        <li><a class="icon brands fa-twitter" href="#"><span class="label">Twitter</span></a></li>
                        <li><a class="icon brands fa-dribbble" href="#"><span class="label">Dribbble</span></a></li>
                        <li><a class="icon brands fa-tumblr" href="#"><span class="label">Tumblr</span></a></li>
                        <li><a class="icon brands fa-linkedin-in" href="#"><span class="label">LinkedIn</span></a></li>
                      </ul>
                      <ul class="contact">
                        <li>
                          <h3>Address</h3>
                          <p>
                            Raven Site, LLC<br />
                            1233 Braun Rd.<br />
                            Cleveland, Ohio 44109
                          </p>
                        </li>
                        <li>
                          <h3>Mail</h3>
                          <p><a href="#">contact@ravensite.com</a></p>
                        </li>
                        <li>
                          <h3>Phone</h3>
                          <p>(216) 437-9610</p>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </section>
        </div>
  </div>
</template>

<style>
</style>

