<template>
  <based-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model.trim="firstName" />
      </div>
      <div class="form-control">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model.trim="lastName" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          rows="5"
          v-model.trim="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="hourlyRate">Hourly Rate</label>
        <input type="number" id="hourlyRate" v-model.trim.number="hourlyRate" />
      </div>
      <div class="form-control">
        <label>Areas of Expertise</label>
        <div class="checkbox-group">
          <div>
            <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
            <label for="frontend">FrontEnd</label>
          </div>
          <div>
            <input type="checkbox" id="backend" value="backend" v-model="areas" />
            <label for="backend">BackEnd</label>
          </div>
          <div>
            <input type="checkbox" id="career" value="career" v-model="areas" />
            <label for="career">Career</label>
          </div>
        </div>
      </div>
      <div class="form-actions">
        <based-button>Register</based-button>
      </div>
    </form>
  </based-card>
</template>

<script>
export default {
  name: 'CoachForm',
  emits: ['save-coach-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      hourlyRate: null,
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const coachData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        Rate: this.hourlyRate,
        areas: this.areas,
      };
      this.$emit('save-coach-data', coachData);
    },
  },
};
</script>
<style scoped>
.form-control {
  margin-bottom: 1rem;
}
.form-control label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.form-control input,
.form-control textarea {
  width: 100%;
  font: inherit;
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.checkbox-group {
  display: flex;
  gap: 1rem;
}
.form-actions {
  text-align: right;
}
.form-actions button {
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  border-radius: 4px;
  background-color: #8b005d;
  color: white;
  cursor: pointer;
}
.form-actions button:hover,
.form-actions button:active {
  background-color: #ac0e77;
  border-color: #ac0e77;
}
</style>
