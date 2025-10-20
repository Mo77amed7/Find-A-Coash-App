<template>
  <div class="based-card">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BasedCard',
};
</script>
<style scoped>
.based-card {
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}

.based-card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
}
</style>
