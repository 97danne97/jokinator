<template>
  <md-card class="joke" v-if="jokeData">
    <md-card-header>
      <div class="md-title">{{ jokeData.setup }}</div>
      <div class="md-subhead">{{ jokeData.delivery }}</div>
    </md-card-header>
    <md-card-actions>
      <!-- If joke is saved, show filled heart, remove joke on click -->
      <md-button class="md-icon-button" v-on:click="removeJoke" v-if="saved">
        <md-icon>favorite</md-icon>
      </md-button>
      <!-- If joke isn´t saved, show bordered heart, save joke on click -->
      <md-button class="md-icon-button" v-on:click="saveJoke" v-else-if="jokeData.id">
        <md-icon>favorite_border</md-icon>
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import axios from "axios";

export default {
  name: "Joke",
  data() {
    return {
      loading: false,
      error: null,
      jokeData: {setup:'..', delivery:'..'},
      saved: false
    };
  },
  props: {
    jokeId: [String, Number]
  },
  methods: {
    saveJoke() {
      // Load jokes from localStorage
      let jokes = JSON.parse(localStorage.getItem("jokes"));
      // Add the joke to the array
      jokes.push(this.jokeData.id);
      // Save the array to localStorage
      localStorage.setItem("jokes", JSON.stringify(jokes));
      // Mark it as saved
      this.saved = true;

      console.log(`Saved joke with ID ${this.jokeData.id}`);
    },
    removeJoke() {
      // Load jokes from localStorage
      let jokes = JSON.parse(localStorage.getItem("jokes"));
      // Remove the joke from the array
      jokes.splice(jokes.indexOf(this.jokeData.id), 1);
      // Save the array to localStorage
      localStorage.setItem("jokes", JSON.stringify(jokes));
      // Mark it as unsaved
      this.saved = false;

      console.log(`Removed joke with ID ${this.jokeData.id}`);
    },
    loadJoke(res) {
      // Check if the API sent an error
      if (res.data.error) {
        this.error = res.data.message;
        return;
      }
      // Store Joke data
      this.jokeData = res.data;

      // Load jokes from localStorage
      let jokes = JSON.parse(localStorage.getItem("jokes"));

      // Check if the Joke has been saved in localstorage
      if (jokes.indexOf(this.jokeData.id) >= 0) {
        // Mark the Joke as saved
        this.saved = true;
      }

      // Set loading to false
      this.loading = false;
    },
    getRandomJoke() {
      // Get a random Joke
      this.loading = true;
      axios({
        method: "get",
        url: "https://sv443.net/jokeapi/v2/joke/Any?type=twopart&blacklistFlags=nsfw,religious,racist,sexist"
      }).then(res => this.loadJoke(res));
    },
    getJokeById(id) {
      // Get the Joke with the specified id
      this.loading = true;
      axios({
        method: "get",
        url: "https://sv443.net/jokeapi/v2/joke/Any?type=twopart&blacklistFlags=nsfw,religious,racist,sexist&idRange="+id
      }).then(res => this.loadJoke(res));
    }
  },
  created() {
    // If a jokeId was specifiend, get the joke by Id, otherwise get a random joke
    if (this.$props.jokeId) {
      this.getJokeById(this.$props.jokeId);
    } else {
      this.getRandomJoke();
    }
  }
};
</script>

<style scoped>
.joke{
  width: 100%;
  margin: 10px 0;
}
</style>