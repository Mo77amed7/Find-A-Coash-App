<template>
  <section>
    <p>Filter</p>
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <button>Register As A Coach</button>
    </div>
  </section>
  <section>
    <p>Coaches List</p>
    <ul v-for="coach in coaches" :key="coach.id">
      <li>{{ coach.firstName }} {{ coach.lastName }}</li>
    </ul>
    <p v-if="!hasCoaches">No coaches found. Please register as a coach!</p>
  </section>
</template>

<script>
export default {
  name: 'CoachesList',
  computed: {
    coaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>
