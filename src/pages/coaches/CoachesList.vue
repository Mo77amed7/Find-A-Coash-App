<template>
  <section>
    <p>Filter</p>
  </section>
  <section>
    <based-card>
      <div class="controls">
        <based-button mode="flat">Refresh</based-button>
        <based-button link to="/register">Register As A Coach</based-button>
      </div></based-card
    >
  </section>
  <section>
    <p>Coaches List</p>
    <div class="coach-list">
      <coach-item
        v-for="coach in coaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :hourly-rate="coach.hourlyRate"
        :areas="coach.areas"
      ></coach-item>
    </div>
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
.based-card {
  width:fit-content;
  padding: 8px; 
  border-radius: 0px !important;
}
.coach-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  margin-bottom: 16px;
}
</style>
