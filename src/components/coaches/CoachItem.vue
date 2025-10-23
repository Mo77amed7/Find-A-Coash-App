<template>
  <div class="coach-item">
    <based-card>
      <li>
        <h2 class="coach-name">{{ fullName }}</h2>
        <p class="rate">{{ rate }}</p>
        <based-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></based-badge>
        <div class="controls">
          <BasedButton mode="flat" :to="coachContactLink" link>
            Contact
          </BasedButton>
          <BasedButton :to="viewDetailsLink" link> View Details </BasedButton>
        </div>
      </li>
    </based-card>
  </div>
</template>

<script>
export default {
  name: 'CoachItem',
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
  width: 100%;
}
.coach-name {
  font-size: 1.5em;
  margin: 12px 0;
}

.coach-specialty {
  font-size: 1.2em;
  color: #666;
}
.controls {
  margin-top: 16px;
  display: flex;
  gap: 10px;
}
.details-button {
  color: white;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
}
li {
  list-style: none;
  padding: 16px;
  margin: 0;
}
</style>
