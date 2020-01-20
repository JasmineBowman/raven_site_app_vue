function() {
axios.get('http://localhost:3000/api/organizations/11').then(response => {
console.log(response);
this.organizationData = response.data; 

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "Describe Your Experience",
      checkboxOptions: [],
      isSubmitted: false
    };
  },

  created: function() {
    axios.get('http://localhost:3000/api/users/23').then(response => {
      this.userData = response.data; 
    });
  },

  methods: {}
};
</script>