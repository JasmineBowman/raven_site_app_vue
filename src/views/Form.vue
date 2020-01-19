<template>
  <div id="app">
    <div id="page-wrapper">

      <div class="form-group">
        <label for="email">Your Email Address</label>
        <input type="text"
           id="email"
           class="form-control"
           v-model="userData.email">
      </div>

      <div class="form-group">
        <label for="password">Enter Password</label>
        <input type="password"
           id="password"
           class="form-control"
           v-model.lazy="userData.password">
      </div>

      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea id="message"
          rows="5"
          class="form-control"
          v-model="message"></textarea>
      </div>

      <div class="form-group">
          <label for="requestfollowup">
              <input type="checkbox"
                     id="requestfollowup"
                     value="requestFollowup"
                     v-model="checkboxOptions"> I Request Follow Up on My Experience
          </label>
          <br>
          <label for="futurementor">
              <input type="checkbox"
                     id="futurementor"
                     value="futureMentor"
                     v-model="checkboxOptions"> I'm interested in being a Mentor!
          </label>
      </div>

      <button class="btn btn-primary"
        @click.prevent="submitted">Submit!
      </button>

      <div class="card" v-if="isSubmitted">
        <div class="card-body">
          <h4 class="card-title">Form Data</h4>

          <p>Mail: <b>{{ userData.email }}</b></p>
          <p>Password: <b>{{ userData.password }}</b></p>
          <p style="white-space: pre">Message: <b>{{ message }}</b></p>
          <p>Checkbox Options:</p>
          <ul>
              <li v-for="item in checkboxOptions"><b>{{ item }}</b></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
      message: "Describe Your Experience",
      checkboxOptions: [],
      isSubmitted: false
    }
  },

  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
};
</script>