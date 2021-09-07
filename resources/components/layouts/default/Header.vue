<template>
  <nav class="container mx-auto py-2">
    <div class="flex justify-around place-items-center">
      <div>
        <img src="~/assets/img/logo.png" alt="" class="w-[80px]">
      </div>
      <div>
        <nuxt-link :to="{ name: 'index' }" class="p-2">
          Home
        </nuxt-link>
        <nuxt-link :to="{ name: 'about' }" class="p-2">
          About
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { Component, mixins, Vue } from 'nuxt-property-decorator';
import App from '~/mixins/app';

@Component
export default class DefaultHeader extends mixins(App) {

}
</script>

<style lang="scss" scoped>

</style>
