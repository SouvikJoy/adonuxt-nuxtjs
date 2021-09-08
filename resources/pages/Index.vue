<template>
  <div>
    <div class="index-1 grid h-[100vh] bg-opacity-50 text-white bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${require('~/assets/img/5.jpg')})` }">
      <div class="grid md:grid-cols-2 md:gap-16 place-items-center max-w-[1024px] mx-auto">
        <div class="grid place-items-center md:block order-last xl:order-first">
          <h1 class="text-5xl md:text-7xl font-bold md:mb-2 text-center md:text-left">
            Heading
          </h1>
          <p class="text-md mb-0 md:text-3xl md:mb-4 text-center md:text-left">
            Sub-Heading
          </p>
          <p class="px-4 md:px-0 text-[14px] md:text-[16px] text-gray-400 text-center md:text-left">
            Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
          </p>
          <button class="px-6 py-2 rounded text-sm md:px-16 md:py-4 bg-gradient-to-r from-yellow-400 to-red-500 md:rounded-2xl hover:shadow-lg hover:bg-purple-500 hover:text-2xl hover:text-white md:text-xl font-bold outline-none">
            Query
          </button>
        </div>
        <div class="grid place-items-center md:block pt-10 md:pt-0">
          <img
            width="600"
            height="400"
            src="~/assets/img/icon.png"
            alt=""
            class="w-[50%] md:w-full"
          >
        </div>
      </div>
    </div>

    <div class="grid place-items-center min-h-[100vh] md:text-left text-center">
      <div class="grid md:grid-cols-2 place-items-center md:gap-16 max-w-[1200px] mx-auto">
        <div class="py-6">
          <img
            width="600"
            height="400"
            src="~/assets/img/bg-3.jpg"
            alt=""
            class="w-[80%] mx-auto md:w-full"
          >
        </div>
        <div class="grid md:grid-rows-2">
          <div class="grid md:grid-cols-2">
            <div class="p-6">
              <img
                v-if="$colorMode.preference === 'dark'"
                width="600"
                height="400"
                src="~/assets/icons/icon-white-1.svg"
                alt=""
                class="mb-2 h-20 md:w-20"
              >
              <img
                v-else
                width="600"
                height="400"
                src="~/assets/icons/icon-1.svg"
                alt=""
                class="mb-2 h-20 md:w-20"
              >
              <p class="text-2xl md:text-3xl md:mb-4">
                Sub-Heading
              </p>
              <p class="text-[14px] md:text-[16px] text-gray-400">
                Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </p>
            </div>
            <div class="p-6">
              <img
                v-if="$colorMode.preference === 'dark'"
                width="600"
                height="400"
                src="~/assets/icons/icon-white-2.svg"
                alt=""
                class="mb-2 h-20 md:w-20"
              >
              <img
                v-else
                width="600"
                height="400"
                src="~/assets/icons/icon-2.svg"
                alt=""
                class="mb-2 h-20 md:w-20"
              >
              <p class="text-2xl md:text-3xl md:mb-4">
                Sub-Heading
              </p>
              <p class="text-[14px] md:text-[16px] text-gray-400">
                Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div class="grid md:grid-cols-2">
            <div class="p-6">
              <img
                v-if="$colorMode.preference === 'dark'"
                width="600"
                height="400"
                src="~/assets/icons/icon-white-3.svg"
                alt=""
                class="mb-2 h-20 md:w-20"
              >
              <img
                v-else
                width="600"
                height="400"
                src="~/assets/icons/icon-3.svg"
                alt=""
                class="mb-2 h-20 md:w-20"
              >
              <p class="text-2xl md:text-3xl md:mb-4">
                Sub-Heading
              </p>
              <p class="text-[14px] md:text-[16px] text-gray-400">
                Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </p>
            </div>
            <div class="p-6">
              <img
                v-if="$colorMode.preference === 'dark'"
                width="600"
                height="400"
                src="~/assets/icons/icon-white-4.svg"
                alt=""
                class="mb-2 h-20 md:w-20"
              >
              <img
                v-else
                width="600"
                height="400"
                src="~/assets/icons/icon-4.svg"
                alt=""
                class="mb-2 h-20 md:w-20"
              >
              <p class="text-2xl md:text-3xl md:mb-4">
                Sub-Heading
              </p>
              <p class="text-[14px] md:text-[16px] text-gray-400">
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
  head () { return { title: 'Home' }; },
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
