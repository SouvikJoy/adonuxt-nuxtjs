<template>
  <div v-if="loading" class="loading-page">
    <img src="~/assets/img/logo.png" class="loading">
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true;
    },
    finish () {
      this.loading = false;
    }
  }
};
</script>
<style scoped>
.loading-page {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 221, 0, 0.98);
  z-index: 1000;
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading {
  display: inline-block;
  width: 10rem;
  height: 10rem;
  animation: zoomInOut 1s ease-in-out;
}
@keyframes zoomInOut {
  0% {
    -webkit-transform: scale(0.5);
  }
  50% {
    -webkit-transform: scale(1.25);
  }
  100% {
    -webkit-transform: scale(1);
  }
}
</style>
