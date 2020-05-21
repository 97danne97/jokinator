<template>
  <section class="joke" v-if="jokeData">
    <p class="setup">{{ jokeData.setup }}</p>
    <p class="delivery">{{ jokeData.delivery }}</p>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Joke",
  data() {
    return {
      loading: false,
      error: null,
      jokeData: null
    };
  },
  created() {
    // Load Joke from API
    this.loading = true;
    axios({
      method: "get",
      url: `${process.env.VUE_APP_JOKE_API_URL}/Any?type=twopart`
    })
      .then(res => {
        // Handle success

        // Check if the API sent an error
        if(res.data.error){
          this.error = res.data.message;
          return;
        }
        // Store Joke data
        this.jokeData = res.data;
      })
      .catch(err => {
        // Handle error
        this.error = err;
        console.log(err);
      }).then(() => {
        // Always executed
        this.loading = false;
      });
  }
};
</script>

<style>
</style>