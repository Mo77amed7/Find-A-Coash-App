<template>
  <based-card>
    <h2>Find Your Coach</h2>
    <span class="filter-options">
      <div>
        <input type="checkbox" id="frontend" @change="onClick" checked />
        <label for="frontend">FrontEnd</label>
      </div>
      <div>
        <input type="checkbox" id="backend" @change="onClick" checked />
        <label for="backend">BackEnd</label>
      </div>
      <div>
        <input type="checkbox" id="career" @change="onClick" checked />
        <label for="career">Career</label>
      </div>
    </span>
  </based-card>
</template>

<script>
export default {
  name: 'FilterCoaches',
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  emits: ['filter-coaches'],
  methods: {
    onClick(event) {
      const area = event.target.id;
      const isChecked = event.target.checked;
      const updateFilters = { ...this.filters, [area]: isChecked };
      this.filters = updateFilters;
      this.$emit('filter-coaches', updateFilters);
    },
  },
};
</script>
<style scoped>
.based-card {
  width: fit-content;
  padding: 8px;
  border-radius: 0px !important;
  margin-bottom: 16px;
}
.filter-options {
  display: flex;
  gap: 16px;
}
.based-card h2 {
  margin: 0 16px 0 0;
  margin-bottom: 8px;
  font-size: 1.5rem;
}
.based-card div {
  display: flex;
  align-items: center;
}
.based-card label {
  margin-left: 8px;
  font-weight: bold;
}
</style>
