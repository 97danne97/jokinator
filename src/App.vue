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
      </md-app-content>
      <md-app-toolbar id="footer">
        <h2>Jokinator</h2>
        <p>Medlemmar: Anders Mantarro, Albin Medoc, Daniel Subasic</p>
        <p>Byggt med: Vue, Vue Materialize, JokeAPI, Axios</p>
      </md-app-toolbar>
    </md-app>
</template>

<script>
export default {
  name: "App",
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

.md-app-scroller{
  margin-bottom: 180px;
}

#footer{
  position: absolute;
  top: auto !important;
  bottom: 0;
}
.md-app-content {
  padding: 16px 0px !important;
}
  
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
