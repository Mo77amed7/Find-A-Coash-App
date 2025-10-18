<template>
  <header>
    <nav>
      <h1><router-link to="/">Find A Coach</router-link></h1>
      <ul>
        <li><router-link to="/coaches">Coaches</router-link></li>
        <li><router-link to="/requests">Requests</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'TheHeader',
};
</script>

<style scoped>
header {
  background-color: #35445d;
  color: white;
  padding: 1rem;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  margin: 0;
  font-size: 1.5rem;
}
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
