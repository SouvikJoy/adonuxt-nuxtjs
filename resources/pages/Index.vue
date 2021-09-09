<template>
  <div>
    <div class="dt_index_page_1" :style="{ backgroundImage: `url(${require('~/assets/img/5.jpg')})` }">
      <div class="dt_index_page_1_content">
        <div class="dt_index_page_1_content_left">
          <h1
            v-gsap.fromTo="[
              { opacity: 0, x: -350 },
              { opacity: 1, x: 0, duration: 3 }
            ]"
            class="dt_index_page_1_content_left_heading"
          >
            {{ appInfo.heading }}
          </h1>
          <p
            v-gsap.fromTo="[
              { opacity: 0, x: -450 },
              { opacity: 1, x: 0, duration: 3 }
            ]"
            class="dt_index_page_1_content_left_subHeading"
          >
            {{ appInfo.subHeading }}
          </p>
          <p
            v-gsap.fromTo="[
              { opacity: 0, x: -500 },
              { opacity: 1, x: 0, duration: 3 }
            ]"
            class="dt_index_page_1_content_left_description"
          >
            {{ appInfo.description }}
          </p>
          <button
            v-gsap.fromTo="[
              { opacity: 0, x: -550 },
              { opacity: 1, x: 0, duration: 3 }
            ]"
            class="dt_index_page_1_content_left_queryButton"
          >
            Query
          </button>
        </div>
        <div
          v-gsap.fromTo="[
            { opacity: 0, x: 600 },
            { opacity: 1, x: 0, duration: 3 }
          ]"
          class="grid place-items-center md:block pt-10 md:pt-0"
        >
          <img
            width="600"
            height="400"
            :src="appInfo.appIcon"
            alt=""
            class="w-[50%] md:w-full"
          >
        </div>
      </div>
    </div>

    <div class="dt_index_page_2">
      <div class="dt_index_page_2_content">
        <div class="dt_index_page_2_content_left">
          <img
            width="600"
            height="400"
            src="~/assets/img/bg-3.jpg"
            alt=""
            class="w-[80%] mx-auto md:w-full"
          >
        </div>
        <div class="dt_index_page_2_content_right">
          <div v-for="(service, index) in services" :key="index">
            <ServiceBox :service="service" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
import ServiceBox from '~/components/pageComponents/Index/ServiceBox';
@Component({
  transition: {
    name: 'bounce',
    mode: 'out-in'
  },
  head () {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ]
    };
  },
  components: {
    ServiceBox
  }
})
export default class Index extends mixins(App) {
  get services () {
    return this.$store.state.services;
  }

  get appInfo () {
    return this.$store.state.appInfo;
  }
}
</script>

<style lang="scss">

</style>
