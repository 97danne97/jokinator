<template>
    <div class="jokes_container">
        <Joke v-if="newJoke"/> <!-- Show joke if it's loaded. -->

        <!-- Button that calls function for fetching a new joke -->
        <md-button id="joke_button" v-on:click="getNewJoke" class="md-raised">Another Joke!</md-button>
    </div>
</template>

<script>
import Joke from "./Joke";

export default {
    name: "Start",
    components: {
        Joke
    },
    data() {
      return {
        newJoke: true,
      };
    },
    methods: {
      getNewJoke() {
        // Remove Joke from DOM
        this.newJoke = false;
        
        this.$nextTick(() => {
          // Add the Joke back in
          this.newJoke = true;
        });
      }
    }
}
</script>