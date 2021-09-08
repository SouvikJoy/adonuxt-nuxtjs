<template>
  <div class="dark:bg-black dark:text-white">
    <header class="fixed w-full bg-white dark:bg-black dark:bg-opacity-[75%] bg-opacity-[75%]">
      <Header />
    </header>
    <main>
      <nuxt :key="$route.fullPath" />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
import Header from '~/components/layouts/default/Header';
import Footer from '~/components/layouts/default/Footer';

@Component({
  components: {
    Footer,
    Header
  }
})
export default class DefaultLayout extends mixins(App) {
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    });
  }
}
</script>
