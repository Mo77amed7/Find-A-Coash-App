<template>
  <based-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          v-model.trim="firstName.value"
          :class="{ invalid: !firstName.isValid }"
          @blur="clearErrors(firstName)"
        />
        <p v-if="!firstName.isValid">Please enter a valid first name.</p>
      </div>
      <div class="form-control">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          v-model.trim="lastName.value"
          :class="{ invalid: !lastName.isValid }"
          @blur="clearErrors(lastName)"
        />
        <p v-if="!lastName.isValid">Please enter a valid last name.</p>
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          rows="5"
          v-model.trim="description.value"
          :class="{ invalid: !description.isValid }"
          @blur="clearErrors(description)"
        ></textarea>
        <p v-if="!description.isValid">Please enter at least 10 characters.</p>
      </div>
      <div class="form-control">
        <label for="hourlyRate">Hourly Rate</label>
        <input
          type="number"
          id="hourlyRate"
          v-model.trim.number="hourlyRate.value"
          :class="{ invalid: !hourlyRate.isValid }"
          @blur="clearErrors(hourlyRate)"
        />
        <p v-if="!hourlyRate.isValid">
          Please enter a valid hourly rate (greater than 0).
        </p>
      </div>
      <div class="form-control">
        <label>Areas of Expertise</label>
        <div class="checkbox-group">
          <div>
            <input
              type="checkbox"
              id="frontend"
              value="frontend"
              v-model="areas.value"
              @blur="clearErrors(areas)"
            />
            <label for="frontend">FrontEnd</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="backend"
              value="backend"
              v-model="areas.value"
              @blur="clearErrors(areas)"
            />
            <label for="backend">BackEnd</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="career"
              value="career"
              v-model="areas.value"
              @blur="clearErrors(areas)"
            />
            <label for="career">Career</label>
          </div>
          <p v-if="!areas.isValid">
            Please select at least one area of expertise.
          </p>
        </div>
      </div>
      <p class="error-message" v-if="!formIsValid">
        Please correct the errors above before submitting the form.
      </p>
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
      firstName: {
        value: '',
        isValid: true,
      },
      lastName: {
        value: '',
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
      hourlyRate: {
        value: null,
        isValid: true,
      },
      areas: {
        value: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearErrors(input) {
      input.isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      this.firstName.isValid = this.firstName.value.trim() !== '';
      this.formIsValid = this.formIsValid && this.firstName.isValid;
      this.lastName.isValid = this.lastName.value.trim() !== '';
      this.formIsValid = this.formIsValid && this.lastName.isValid;
      this.description.isValid = this.description.value.trim().length >= 10;
      this.formIsValid = this.formIsValid && this.description.isValid;
      this.hourlyRate.isValid =
        this.hourlyRate.value !== null && this.hourlyRate.value > 0;
      this.formIsValid = this.formIsValid && this.hourlyRate.isValid;
      this.areas.isValid = this.areas.value.length > 0;
      this.formIsValid = this.formIsValid && this.areas.isValid;

      return this.formIsValid;
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const coachData = {
        first: this.firstName.value,
        last: this.lastName.value,
        desc: this.description.value,
        Rate: this.hourlyRate.value,
        areas: this.areas.value,
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
.invalid {
  border-color: red;
  background-color: #fbdada;
}
p {
  color: red;
  margin: 0.25rem 0 0 0;
  font-size: 0.85rem;
}
.error-message {
  color: red;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
