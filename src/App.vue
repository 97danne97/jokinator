<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    // Create jokes in localStorage if it not exists
    if (!localStorage.getItem("jokes")) {
      localStorage.setItem("jokes", JSON.stringify([]));
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
