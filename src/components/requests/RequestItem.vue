<template>
  <based-card>
    <li>
      <span> Email: </span>
      <a :href="requestedEmail">{{ email }}</a>
      <p>Message: {{ message }}</p>
    </li>
  </based-card>
</template>
<script>
export default {
  name: 'RequestItem',
  props: {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  computed: {
    requestedEmail() {
      return `mailto:${this.email}`;
    },
  },
};
</script>
<style scoped>
li {
  list-style: none;
  margin: 1rem 0;
}
a {
  font-weight: bold;
}
p {
  margin: 0.25rem 0 0 0;
}
</style>
