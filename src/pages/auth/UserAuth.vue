<template>
  <div>
    <base-dialog :show="isLoading" fixed title="Authenticating...">
      <base-spinner></base-spinner>
    </base-dialog>
    <base-dialog :show="!!error" title="Authenticating..." @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <based-card>
      <form action="" @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">Check a valid Email and Password</p>
        <div class="form-actions">
          <based-button>{{ submitButtonCaption }}</based-button>
          <based-button type="button" mode="flat" @click="switchAuthMode">{{
            switchButtonMode
          }}</based-button>
        </div>
      </form>
    </based-card>
  </div>
</template>

<script>
export default {
  name: 'UserAuth',
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchButtonMode() {
      if (this.mode === 'login') {
        return 'Signup Instead';
      } else {
        return 'Login Instead';
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        if (this.mode === 'login') {
          //
        } else {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password,
          });
        }
      } catch (err) {
        this.error = err.message || 'Failed to Authenticate';
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style lang="css" scoped>
.based-card {
  max-width: 600px;
  margin: 20px auto;
  padding: 40px;
  border-radius: 20px !important;
}
.form-control {
  margin-bottom: 12px;
}
.form-control label {
  display: block;
  margin-bottom: 4px;
  font-weight: 900;
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
.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
