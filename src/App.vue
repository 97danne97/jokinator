<template>
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">Jokinator</span>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary" md-sync-route>
            <md-tab id="tab-start" md-label="Start" to="/" exact></md-tab>
            <md-tab id="tab-jokes" md-label="Saved jokes" to="/jokes"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <router-view/>
        <Footer></Footer>
      </md-app-content>
    </md-app>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  components:{
    Footer
  },
  data(){
    return{
      menuVisible: false
    }
  },
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

.md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);

    
  }
.md-app-content {
  padding: 16px 0px !important;
}
  
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
