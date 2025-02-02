<template>
  <nav>
    <router-link to="/">Live Lyrics</router-link>
    <router-link to="/history">History</router-link>
    <router-link to="/album-info">Album Info</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
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