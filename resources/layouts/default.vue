<template>
  <div class="dark:bg-black dark:text-white">
    <header class="default_header">
      <DefaultHeader />
    </header>
    <main class="default_main">
      <nuxt :key="$route.fullPath" />
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

}
</script>
