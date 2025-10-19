<template>
  <div class="coach-item">
    <li>
      <h2 class="coach-name">{{ fullName }}</h2>
      <p class="rate">{{ rate }}</p>
      <span v-for="area in areas" :key="area">{{ area }}</span>
      <div class="controls">
        <router-link :to="coachContactLink">Contact</router-link>
        <router-link :to="viewDetailsLink">View Details</router-link>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'areas', 'description', 'hourlyRate'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    rate() {
      return `$${this.hourlyRate}/hr`;
    },
    coachContactLink() {
      return `/coaches/${this.id}/contact`;
    },
    viewDetailsLink() {
      return `/coaches/${this.id}`;
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

.coach-image {
  max-width: 100%;
  border-radius: 8px;
}

.coach-name {
  font-size: 1.5em;
  margin: 12px 0;
}

.coach-specialty {
  font-size: 1.2em;
  color: #666;
}

.details-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
}

.details-button:hover {
  background-color: #0056b3;
}
</style>
