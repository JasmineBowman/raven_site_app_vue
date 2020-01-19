<template>
  <div id="app">
    <div id="page-wrapper">

    <!-- Nav -->
      <nav id="nav">
        <ul>
          <li class="current"><a href="index.html">Home</a></li>
          <li>
            <a href="#">Dropdown</a>
            <ul>
              <li><a href="/signup">Sign Up!</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/organizations">Participating Organizations</a></li>
              <li><a href="/forms/new">Forms</a></li>
            </ul>
          </li>
        </ul>
      </nav>

    <router-view/>
      <section id="banner">
        <header>
          <h2>Raven Site</h2>
          <a href="#" class="image featured"><img src="images/raven_image.jpg" alt="" /></a>
          <p>A Modern Mentor</p>
        </header>
      </section>

<!--       <section id="header">
      </section> -->

            <!-- Footer -->
            <section id="footer">
              <div class="container">
                <div class="row">
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
                          <h3><a href="#">Initial Supervisor Meeting Reports Due.</a></h3>
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
                  <div class="col-4 col-12-medium">
                    <section>
                      <header>
                        <h2>What's this all about?</h2>
                      </header>
                      <a href="#" class="image featured"><img src="images/ravenstree.jpeg" alt="" /></a>
                      <p>
                        <strong>Raven Site</strong> is a free app specifically designed to support high school students pursuing alternative pathways to graduation. 
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
                  <div class="col-12">
                  </div>
                </div>
              </div>
            </section>
        </div>
  </div>
</template>

<style>
</style>

