<template>
<div class="container">
  <div id="app">
    <div id="page-wrapper">

    <header class="major">
    <h2>EXPERIENCE TRACKING FORM</h2>
    </header>

      <div class="form-group">
        <label for="experienceproposal">Experience Proposal</label>
        <input type="text"
           id="experienceproposal"
           class="form-control">
      </div>

      <div class="form-group">
        <label for="experienceskills">Experience Skills</label>
        <input type="text"
           id="experienceskills"
           class="form-control">
      </div>

      <div class="form-group">
        <label for="experiencedocumentation">Experience Documentation</label>
        <input type="text"
           id="experiencedocumentation"
           class="form-control">
      </div>

      <button class="btn btn-primary"
        @click.prevent="submitted">Submit!
      </button>

    </div>
  </div>
</div>
</template>