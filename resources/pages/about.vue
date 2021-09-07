<template>
  <div class="grid place-items-center h-screen">
    <div>
      <img src="~assets/img/logo.svg" alt="Morgan-design-logo Logo" class="logo" />
      <h1 class="title">
        This page is loaded from the {{ name }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head () {
    return {
      title: `About`
    }
  }
}
</script>

<style>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
