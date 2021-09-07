<template>
  <div id="App" class="bg-white dark:bg-gray-900 dark:text-white">
    <header>
      <Header />
    </header>
    <main>
      <nuxt :key="$route.fullPath"/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style>

</style>
