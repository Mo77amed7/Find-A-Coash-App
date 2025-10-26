<template>
  <base-dialog :show="!!error" @close="handleError" title="An Error Occurred">
    <p>{{ error }}</p>
  </base-dialog>
  <based-card>
    <section>
      <h1>Requests Received</h1>
      <base-spinner v-if="isLoading" />
      <ul v-if="hasRequests && !isLoading">
        <request-item
          v-for="request in requests"
          :key="request.id"
          :id="request.id"
          :email="request.email"
          :message="request.message"
        ></request-item>
      </ul>
      <p v-else>No requests received yet.</p>
    </section>
  </based-card>
</template>

<script>
import RequestItem from '@/components/requests/RequestItem.vue';
export default {
  name: 'RequestReceive',
  components: {
    RequestItem,
  },
  data() {
    return {
      error: null,
      isLoading: true,
    };
  },
  computed: {
    requests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Failed to fetch requests.';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadRequests();
  },
};
</script>

<style scoped>
.based-card {
  max-width: 40rem;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}
ul {
  padding: 0;
}
p {
  text-align: center;
}
</style>
