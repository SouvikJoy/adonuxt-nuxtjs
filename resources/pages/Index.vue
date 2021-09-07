<template>
  <div class="grid h-[100vh] dark:bg-black dark:text-white">
    <div class="grid grid-cols-2 gap-16 place-items-center max-w-[1024px] mx-auto">
      <div>
        <h1 class="text-7xl font-bold mb-2">
          Heading
        </h1>
        <h6 class="text-3xl mb-4">
          Sub-Heading
        </h6>
        <p>
          Lorem Ipsum is simply dummy
          text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled
        </p>
        <button class="px-16 py-4 bg-purple-400 rounded-2xl hover:shadow-lg hover:bg-purple-500 hover:text-2xl hover:text-white text-xl font-bold outline-none">
          Query
        </button>
      </div>
      <div class="justify-self-end">
        <img src="~/assets/img/icon.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
@Component({
  components: {

  }
})
export default class Index extends mixins(App) {
  async asyncData ({ $axios }) {
    const data = await $axios.$get('products');
    console.log(data);
    return { products: data };
  }
}
</script>

<style lang="scss">

</style>
