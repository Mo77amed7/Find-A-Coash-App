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
    <coach-item
      v-for="coach in coaches"
      :key="coach.id"
      :first-name="coach.firstName"
      :last-name="coach.lastName"
      :hourly-rate="coach.hourlyRate"
      :areas="coach.areas"
    ></coach-item>
    <p v-if="!hasCoaches">No coaches found. Please register as a coach!</p>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
  name: 'CoachesList',
  components: {
    CoachItem,
  },
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

<style scoped>
.coach-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  text-align: center;
}
.controls {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
}
</style>
