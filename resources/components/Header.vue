<template>
  <div class="flex justify-around place-items-center">
    <img src="~assets/img/logo.svg" alt="Nuxt.js Logo" class="brand-logo" />
    <div class="header_link_container">
      <nuxt-link :to="{ path: '/' }" class="nuxt_link">Home</nuxt-link>
      <nuxt-link :to="{ name: 'about' }" class="nuxt_link">About</nuxt-link>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Header'
}
</script>
