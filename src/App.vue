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
            </ul>
          </li>
        </ul>
      </nav>

      
      <section id="banner">
        <header>
          <h2>Raven Site</h2>
          <a href="#" class="image featured"><img src="images/raven_image.jpg" alt="" /></a>
          <p>A Modern Mentor</p>
        </header>
      </section>

      <section id="header">
      </section>

            <!-- Footer -->
            <section id="footer">
              <div class="container">
                <div class="row">
                  <div class="col-8 col-12-medium">
                    <section>
                      <header>
                        <h2>Blandit nisl adipiscing</h2>
                      </header>
                      <ul class="dates">
                        <li>
                          <span class="date">Jan <strong>27</strong></span>
                          <h3><a href="#">Lorem dolor sit amet veroeros</a></h3>
                          <p>Ipsum dolor sit amet veroeros consequat blandit ipsum phasellus lorem consequat etiam.</p>
                        </li>
                        <li>
                          <span class="date">Jan <strong>23</strong></span>
                          <h3><a href="#">Ipsum sed blandit nisl consequat</a></h3>
                          <p>Blandit phasellus lorem ipsum dolor tempor sapien tortor hendrerit adipiscing feugiat lorem.</p>
                        </li>
                        <li>
                          <span class="date">Jan <strong>15</strong></span>
                          <h3><a href="#">Magna tempus lorem feugiat</a></h3>
                          <p>Dolore consequat sed phasellus lorem sed etiam nullam dolor etiam sed amet sit consequat.</p>
                        </li>
                        <li>
                          <span class="date">Jan <strong>12</strong></span>
                          <h3><a href="#">Dolore tempus ipsum feugiat nulla</a></h3>
                          <p>Feugiat lorem dolor sed nullam tempus lorem ipsum dolor sit amet nullam consequat.</p>
                        </li>
                        <li>
                          <span class="date">Jan <strong>10</strong></span>
                          <h3><a href="#">Blandit tempus aliquam?</a></h3>
                          <p>Feugiat sed tempus blandit tempus adipiscing nisl lorem ipsum dolor sit amet dolore.</p>
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
 
    <router-view/>

  </div>
</template>

<style>
</style>

