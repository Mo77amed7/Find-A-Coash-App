<template>
  <based-card>
    <section>
      <filter-coaches @filter-coaches="onFilterCoaches"></filter-coaches>
    </section>
    <based-card>
      <section>
        <div class="controls">
          <based-button mode="flat" @click="refreshCoaches"
            >Refresh</based-button
          >
          <based-button v-if="!isCoach" link to="/register"
            >Register As A Coach</based-button
          >
        </div>
      </section>
      <section>
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
    </based-card>
  </based-card>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import FilterCoaches from '../../components/coaches/CoachFilter.vue';
export default {
  name: 'CoachesList',
  data() {
    return {
      isActive: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  components: {
    CoachItem,
    FilterCoaches,
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    coaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        const areas = coach.areas || [];
        return (
          (this.isActive.frontend && areas.includes('frontend')) ||
          (this.isActive.backend && areas.includes('backend')) ||
          (this.isActive.career && areas.includes('career'))
        );
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    onFilterCoaches(updateFilters) {
      this.isActive = { ...updateFilters };
    },
    refreshCoaches() {
      this.$store.dispatch('coaches/loadCoaches');
    },
  },
  created() {
    this.$store.dispatch('coaches/loadCoaches');
  },
};
</script>

<style scoped>
.based-card {
  width: fit-content;
  padding: 8px;
  border-radius: 0px !important;
  margin: 16px auto;
}
.coach-list {
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  margin-bottom: 16px;
}
</style>
