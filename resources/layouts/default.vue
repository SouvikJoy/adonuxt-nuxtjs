<template>
  <div class="default_app">
    <header class="default_header">
      <DefaultHeader />
    </header>
    <main class="default_main">
      <nuxt :key="$route.fullPath" keep-alive />
    </main>
    <footer class="default_footer">
      <DefaultFooter />
    </footer>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
import DefaultHeader from '~/components/layouts/default/Header';
import DefaultFooter from '~/components/layouts/default/Footer';

@Component({
  components: {
    DefaultHeader,
    DefaultFooter
  }
})
export default class DefaultLayout extends mixins(App) {
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 1500);
    });
  }
}
</script>
