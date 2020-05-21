import Vue from "vue";
import Router from "vue-router";

import Joke from "./components/Joke";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/joke",
            name: "joke",
            component: Joke
        }
    ]
});