{{{{raw}}}}
<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo">
    <h1 class="title">
      This page is loaded from the {{ name }}
    </h1>
    <h2 v-if="name === 'client'" class="info">
      Please refresh the page
    </h2>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
  </section>
</template>
{{{{/raw}}}}
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
