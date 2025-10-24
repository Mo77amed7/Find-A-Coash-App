<template>
  <based-card>
    <section>
      <h1>Requests Received</h1>
      <ul>
        <request-item
          v-for="request in requests"
          :key="request.id"
          :id="request.id"
          :email="request.email"
          :message="request.message"
        ></request-item>
      </ul>
      <p v-if="!hasRequests">No requests received yet.</p>
    </section>
  </based-card>
</template>

<script>
import RequestItem from '@/components/requests/RequestItem.vue';
export default {
  name: 'RequestReceive',
  components: {
    RequestItem
  },
  computed: {
    requests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
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