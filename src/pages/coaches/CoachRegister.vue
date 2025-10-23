<template>
  <section>
    <based-card>
      <h1>Registration</h1>
      <coach-form @save-coach-data="onSaveCoachData"></coach-form>
    </based-card>
  </section>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm.vue';
export default {
  name: 'CoachRegister',
  components: {
    CoachForm,
  },
  methods: {
    onSaveCoachData(coachData) {
      this.$store.dispatch('coaches/registerCoach', coachData);
      console.log(coachData);
      this.$router.replace('/coaches');
    },
  },
};
</script>
<style scoped>
.based-card {
  max-width: 40rem;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}
h1 {
  margin-bottom: 1rem;
}
</style>
