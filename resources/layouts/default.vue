<template>
  <div>
    <header class="fixed w-full bg-black bg-opacity-[75%]">
      <Header />
    </header>
    <main>
      <nuxt :key="$route.fullPath" />
    </main>
    <Footer />
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
export default class DefaultLayout extends mixins(App) {}
</script>

<style lang="scss">
.default-main {
  min-height: 87vh;
}

.button, .button:visited
{
  display: inline-block;
  color: #744d82;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #744d82;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button {
  &.morgan-link-exact-active, &:hover, &:focus {
    color: #fff;
    background-color: #744d82;
  }
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
