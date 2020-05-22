import Vue from "vue";
import Router from "vue-router";

import Start from "./components/Start";
import Jokes from "./components/Jokes";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "start",
            component: Start
        },
        {
            path: "/jokes",
            name: "jokes",
            component: Jokes
        }
    ]
});