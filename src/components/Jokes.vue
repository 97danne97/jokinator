<template>
  <div class="jokes_container">
      <!-- Show placeholder if there are no saved jokes in localstorage -->
      <md-empty-state v-if="jokes.length ==0" md-icon="error" md-label="No jokes added" md-description="Jokes that you mark as favorite will be listed here."></md-empty-state>
      
      <!-- Creates list of jokes from localstorage, with a growth animation with dynamically increasing delay -->
      <Joke :style="'animation-delay: ' + (0.05 * i).toString() + 's' " class="list-item" v-for="(jokeid, i) in jokes" :key="jokeid" v-bind:jokeId="jokeid"/>
  </div>
</template>

<script>
import Joke from "./Joke";

export default {
  name: "Jokes",
  components: {
    Joke
  },
  computed: {
    /*
    'Computed' functions create a variable with
    the same name as the function name and with 
    the return value of the function. The functions
    are reactive so if dependent variables are
    updated then the function will return a new value.
    */
    jokes(){
      // Load jokes from localStorage
      let jokes = JSON.parse(localStorage.getItem("jokes"));
      return jokes;
    }
  }
};
</script>