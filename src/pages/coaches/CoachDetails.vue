<template>
  <section>
    <based-card>
      <h2>{{ fullName }}</h2>
      <p>{{ rate }}</p>
    </based-card>
  </section>
  <section>
    <based-card>
      <header>
        <h3>Interested! Reach out Now</h3>
        <based-button link :to="contactLink">contact</based-button>
      </header>
    </based-card>
    <router-view></router-view>
  </section>
  <section>
    <based-card>
      <based-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
        >{{ area }}</based-badge
      >
      <p>{{ description }}</p>
    </based-card>
  </section>
</template>

<script>
export default {
  name: 'CoachDetails',
  data() {
    return {
      selectedCoach: null,
    };
  },
  props: ['id'],
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    rate() {
      return this.selectedCoach.hourlyRate + ' USD/hr';
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>

<style scoped>
.based-card {
  padding: 16px;
  width: 800px;
  margin: 20px auto;
  border-radius: 6px !important;
}
a {
  margin-top: 12px;
  width: fit-content;
}
</style>
