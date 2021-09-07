<template>
  <div>
    <div class="index-1 grid h-[100vh] bg-opacity-50 text-white bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${require('~/assets/img/5.jpg')})` }">
      <div class="grid grid-cols-2 gap-16 place-items-center max-w-[1024px] mx-auto">
        <div>
          <h1 class="text-7xl font-bold mb-2">
            Heading
          </h1>
          <h6 class="text-3xl mb-4">
            Sub-Heading
          </h6>
          <p class="text-gray-400">
            Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
          <button class="px-16 py-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-2xl hover:shadow-lg hover:bg-purple-500 hover:text-2xl hover:text-white text-xl font-bold outline-none">
            Query
          </button>
        </div>
        <div class="justify-self-end">
          <img src="~/assets/img/icon.png" alt="">
        </div>
      </div>
    </div>

    <div class="grid h-[100vh] bg-black text-white">
      <div class="grid grid-cols-2 place-items-center gap-16 max-w-[1200px] mx-auto">
        <div class="justify-self-end">
          <img src="~/assets/img/ribbon.jpg" alt="">
        </div>
        <div class="grid grid-rows-2">
          <div class="grid grid-cols-2">
            <div class="p-6">
              <img src="~/assets/icons/icon-white-1.svg" alt="" class="mb-2">
              <h4 class="text-3xl mb-4">
                Sub-Heading
              </h4>
              <p class="text-gray-400">
                Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </p>
            </div>
            <div class="p-6">
              <img src="~/assets/icons/icon-white-2.svg" alt="" class="mb-2">
              <h4 class="text-3xl mb-4">
                Sub-Heading
              </h4>
              <p class="text-gray-400">
                Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="p-6">
              <img src="~/assets/icons/icon-white-1.svg" alt="" class="mb-2">
              <h4 class="text-3xl mb-4">
                Sub-Heading
              </h4>
              <p class="text-gray-400">
                Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </p>
            </div>
            <div class="p-6">
              <img src="~/assets/icons/icon-white-2.svg" alt="" class="mb-2">
              <h4 class="text-3xl mb-4">
                Sub-Heading
              </h4>
              <p class="text-gray-400">
                Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
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
