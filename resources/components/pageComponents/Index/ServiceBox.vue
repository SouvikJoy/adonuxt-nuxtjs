<template>
  <div class="p-6">
    <img
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
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
@Component({
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  components: {

  }
})
export default class ServiceBox extends mixins(App) {

}
</script>

<style>

</style>
