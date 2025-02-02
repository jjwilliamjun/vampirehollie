<template>
  <div id="app">
    <!-- Navigation Bar -->
    <NavBar />

    <!-- Router View to Display Pages -->
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

/* Optional: Add global styles for the navigation bar */
nav {
  background-color: #333;
  padding: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.2rem;
}

nav a:hover {
  text-decoration: underline;
}
</style>