<template>
  <span class="based-badge" :class="type">
    {{ text }}
  </span>
</template>
<script>
export default {
  name: 'BasedBadge',
  props: ['title', 'type'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>
<style scoped>
.based-badge {
  display: inline-block;
  background-color: #ffcc00;
  color: #333;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9em;
}
.frontend {
  background-color: #42b983;
  color: white;
}
.backend {
  background-color: #35495e;
  color: white;
}
.career {
  background-color: #ff5733;
  color: white;
}
</style>
