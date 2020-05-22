<template>
  <div class="jokes_container">
      <Joke v-for="jokeid in jokes" :key="jokeid" v-bind:jokeId="jokeid"/>
  </div>
</template>

<script>
import Joke from "./Joke";

export default {
  name: "Jokes",
  components: {
    Joke
  },
  data() {
    // Load jokes from localStorage
    let jokes = JSON.parse(localStorage.getItem("jokes"));
    return {
      jokes: jokes
    };
  }
};
</script>

<style>
</style>