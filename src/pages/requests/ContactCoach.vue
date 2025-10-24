<template>
  <based-card>
    <section>
      <h1>Contact Coach</h1>
      <form @submit.prevent="sendMessage">
        <div class="form-control">
          <label for="email">Your Email</label>
          <input type="email" id="email" v-model.trim="email" />
          <p v-if="!email">
            Please enter a valid email address.
          </p>
        </div>
        <div class="form-control">
          <label for="message">Your Message</label>
          <textarea id="message" rows="5" v-model.trim="message"></textarea>
          <p v-if="!message">Please enter a valid message.</p>
        </div>
        <based-button type="submit">Send</based-button>
      </form>
    </section>
  </based-card>
</template>

<script>
export default {
  name: 'ContactCoach',
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
    };
  },
  methods: {
    sendMessage() {
      this.formIsValid = true;

      if (!this.email || !this.email.includes('@')) {
        this.formIsValid = false;
      }
      if (!this.message || this.message === '') {
        this.formIsValid = false;
      }

      if (!this.formIsValid) {
        return;
      }
      this.$store.dispatch('requests/contactCoach', {
        coachId: this.$route.params.id,
        email: this.email,
        message: this.message,
      });
      alert('Message sent successfully!');
      this.$router.replace('/coaches');
    },
  },
};
</script>
<style scoped>
.form-control {
  margin-bottom: 12px;
}
.form-control label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}
.form-control input,
.form-control textarea {
  width: 100%;
  padding: 8px;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
}
a {
  padding: 10px 20px;
  font: inherit;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
a:hover {
  background-color: #2563eb;
}
</style>
