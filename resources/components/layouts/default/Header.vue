<template>
  <nav class="container mx-auto py-2">
    <div class="flex justify-around place-items-center">
      <NuxtLink :to="{ name: 'index' }" class="flex place-items-center">
        <img
          width="600"
          height="400"
          src="~/assets/img/logo.png"
          alt=""
          class="w-[36px] pt-1.5 h-full"
        >
        <h1 class="pt-1.5 px-3 text-xl text-white">
          Morgan Design
        </h1>
      </NuxtLink>
      <div>
        <nuxt-link :to="{ name: 'index' }" class="p-2">
          Home
        </nuxt-link>
        <nuxt-link :to="{ name: 'about' }" class="p-2">
          About
        </nuxt-link>
        <nuxt-link :to="{ name: 'products' }" class="p-2">
          Products
        </nuxt-link>
        <nuxt-link :to="{ name: 'contact' }" class="p-2">
          Contact
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
