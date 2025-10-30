<template>
  <div>
    <base-dialog @close="handleError" :show="!!error" title="An error occurred">
      <p>{{ error }}</p>
    </base-dialog>
    <based-card>
      <filter-coaches @filter-coaches="onFilterCoaches"></filter-coaches>
    </based-card>
    <based-card>
      <based-card class="coaches-list">
        <section>
          <div class="controls">
            <based-button mode="flat" @click="refreshCoaches"
              >Refresh</based-button
            >
            <based-button
              link
              to="/authentication?redirect=register"
              v-if="!isLoggedIn"
              >Login To Register As A Coach</based-button
            >
            <based-button
              v-if="isLoggedIn && !isCoach && !isLoading"
              link
              to="/register"
              >Register As A Coach</based-button
            >
          </div>
        </section>
        <section>
          <div v-if="isLoading">
            <base-spinner></base-spinner>
          </div>
          <div class="coach-list" v-else-if="hasCoaches">
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
          <p v-else>No coaches found. Please register as a coach!</p>
        </section>
      </based-card>
    </based-card>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import FilterCoaches from '../../components/coaches/CoachFilter.vue';
export default {
  name: 'CoachesList',
  data() {
    return {
      error: null,
      isLoading: false,
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
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
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
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    onFilterCoaches(updateFilters) {
      this.isActive = { ...updateFilters };
    },
    async refreshCoaches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches');
      } catch (error) {
        this.error = error.message || 'Failed to fetch coaches.';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.refreshCoaches();
  },
};
</script>

<style scoped>
.based-card {
  max-width: 700px;
  padding: 8px;
  border-radius: 0px !important;
  margin: 16px auto;
}
.coaches-list {
  width: 100% !important;
}
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
</style>
