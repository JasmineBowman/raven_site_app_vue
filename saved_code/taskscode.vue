HTML

  <title>Vue.js Intro</title>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <style>
    .strike {
      text-decoration: line-through;
    }
  </style>


      <p>Add a new task here: <input type="text" v-model="newTask"><button v-on:click="addTask()">Add a new task</button></p>

    <div v-for="task in tasks">

     {{ task.text }} <button v-on:click="deleteTask(task)">Delete task</button>  
    
    </div>
  </div>
  <script src="index.js"></script>