import Vue from "vue";
import Router from "vue-router";

import Jokes from "./components/Jokes";
import Joke from "./components/Joke";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/jokes",
            name: "jokes",
            component: Jokes
        },
        {
            path: "/joke",
            name: "joke",
            component: Joke
        }
    ]
});