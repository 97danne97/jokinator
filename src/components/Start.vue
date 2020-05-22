<template>
    <div>
        <Joke v-if="newJoke"/>
        <md-button v-on:click="getNewJoke" class="md-raised">Another Joke!</md-button>
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

<style>

</style>