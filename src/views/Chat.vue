<template>
<div class="chat-popup" id="myForm">
  <form action="/action_page.php" class="form-container">
    <h1>Chat</h1>

    <label for="msg"><b>Message</b></label>
    <textarea placeholder="Type message.." name="msg" required></textarea>

    <button type="submit" class="btn">Send</button>
    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
  </form>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() 
},

  created: function() { 
  openForm
  document.getElementById("myForm").style.display = "block";
},

  created: function() {
  closeForm
  document.getElementById("myForm").style.display = "none";
},


</script>