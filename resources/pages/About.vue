<template>
  <div class="grid place-items-center h-screen bg-red-200">
    <h1 class="text-7xl">
      AboutPage - 1
    </h1>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';

@Component
export default class About extends mixins(App) {
  head () {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About Nuxt'
        }
      ]
    };
  }

  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    });
  }
}
</script>

<style lang="scss">

</style>
