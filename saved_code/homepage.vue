<template>
  <div class="home">
    <h1>{{ message }}</h1>
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



