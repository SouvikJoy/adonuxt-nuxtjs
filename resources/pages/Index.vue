<template>
  <div class="grid place-items-center h-screen bg-yellow-200">
    <h1 class="text-7xl">
      Page - 1
    </h1>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
@Component({
  components: {

  }
})
export default class Index extends mixins(App) {
  async asyncData ({ $axios }) {
    const data = await $axios.$get('products');
    console.log(data);
    return { products: data };
  }
}
</script>

<style lang="scss">

</style>
