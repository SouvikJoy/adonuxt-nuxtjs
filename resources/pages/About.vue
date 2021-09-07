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
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    };
  }

  head () {
    return {
      title: `About Page (${this.name}-side)`
    };
  }
}
</script>

<style lang="scss" scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 10px 0 0;
}
.button
{
  margin-top: 50px;
}
</style>
