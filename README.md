# jokinator
This application will fetch jokes from the JokeAPI at https://sv443.net/jokeapi/v2/joke.

Users can generate jokes, save them locally in LocalStorage and list them. The application uses the Google Material design language which the group implemented by the Vue plugin Vue Material: https://vuematerial.io.

## Why do we use Vue.js?
Since this was a smaller project, we wanted a framework that was easy to learn. We choose Vue for its easy learning curve and because one of the group members had used Vue before, so that easy learning curve was confirmed. We also choose Vue for its clear documentation. Vue also only weighs around 20KB, making it fast and flexible.

We chose Vue over Angular because of the more complex nature of Angular which we felt wasn’t needed for our project. With Vue, the only new thing the group had to learn was to code with components which Vue, unlike Angular and React, makes easier with its Single File Components. Every component you create has a single .vue -file that includes its scoped html, Javascript and CSS like this:

```
<template>
  <div id=”app”/>
</template>

<script>
export default{
    
}
</script>

<style scoped>
#app{
  overflow-x: hidden;
}
</style>
```

AngularJS has 59 500 stars on GitHub, Vue has 165 000 and React has 150 000 so there’s definitely a large interest in the framework we chose.


## How to setup a Jokinator project

### Clone the repository
```
git clone https://github.com/97danne97/jokinator/
```

### Install dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](LICENSE)
