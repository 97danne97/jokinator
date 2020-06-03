<template>
  <div class="page-container">
    <md-app> <!-- root vue-material component that wraps the entire web-app -->
      <md-app-toolbar class="md-large md-dense md-primary"> <!-- Large header -->
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">Jokinator</span> <!-- Main heading -->
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary" md-sync-route> <!-- Tabs that sync with the routes -->
            <md-tab id="tab-start" md-label="Start" to="/" exact></md-tab> <!-- Router links with 'to'- attribute -->
            <md-tab id="tab-jokes" md-label="Saved jokes" to="/jokes"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-content> <!-- Huvudinnehåll -->
        <router-view/> <!-- Loads dynamic content depending on the current route -->
      </md-app-content>

      <md-app-toolbar id="footer"> <!-- Sticky footer to bottom, with info about developers -->
      </md-app-toolbar>
    </md-app>
  </div>
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

.md-app { /* Footer placement to bottom */
  min-height: 100vh;
}

.md-app-scroller{ /* Footer placement to bottom, because of vue-material conflicts */
  margin-bottom: 180px;
}

#footer{ /* Footer placement to bottom */
  position: absolute;
  top: auto !important; /* !important for higher priority than vue-material */
  bottom: 0;
  display: flex;
  flex-direction: column;
}

.md-app-content { /* !important for priority over vue-material */
  padding: 16px 0px !important;
}

.jokes_container{ /* Centering the jokes */
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: auto;
}
</style>