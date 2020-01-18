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