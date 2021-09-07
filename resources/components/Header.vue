<template>
  <div class="flex justify-around place-items-center">
    <div class="header_brand_container">
      <nuxt-link :to="{ path: '/' }" class="nuxt_link_brand">
        <img src="~assets/img/logo.svg" alt="Morgan-design-logo Logo" class="logo" />
      </nuxt-link>
    </div>
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
