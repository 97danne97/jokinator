<template>
  <div class="jokes_container">
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
  computed:{
    jokes(){
      // Load jokes from localStorage
      let jokes = JSON.parse(localStorage.getItem("jokes"));
      return jokes
    }
  }
};
</script>

<style>
</style>