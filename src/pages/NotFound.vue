<template>
  <based-card>
    <section>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/coaches">Go to Home</router-link>
    </section>
  </based-card>
</template>
<script>
export default {
  name: 'NotFound',
};
</script>
<style scoped>
.based-card {
  max-width: 600px;
  margin: 5rem auto;
  padding: 2rem;
}
section {
  text-align: center;
}
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
p {
  margin-bottom: 1.5rem;
}
a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  text-decoration: underline;
}
</style>
