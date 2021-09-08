<template>
  <div class="grid place-items-center h-screen bg-yellow-200">
    <h1 class="text-7xl">
      ProductsPage - 1
    </h1>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';

@Component
export default class Products extends mixins(App) {
  head () {
    return {
      title: 'Products'
    };
  }
}
</script>

<style scoped>

</style>
