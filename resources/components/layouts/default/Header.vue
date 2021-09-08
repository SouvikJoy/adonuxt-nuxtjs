<template>
  <nav class="dt_defaultHeader_content">
    <div class="dt_defaultHeader_content_wrapper">
      <div class="dt_defaultHeader_content_menuIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"
          />
        </svg>
      </div>

      <NuxtLink
        :to="
          {
            name:
              'index'
          }"
        class="dt_defaultHeader_content_brand"
      >
        <img
          width="600"
          height="400"
          src="~/assets/img/logo.png"
          alt=""
          class="dt_defaultHeader_content_brandIcon"
        >
        <h1 class="dt_defaultHeader_content_brandName">
          Morgan Design
        </h1>
      </NuxtLink>

      <div class="dt_defaultHeader_content_middle">
        <nuxt-link :to="{ name: 'index' }" class="dt_defaultHeader_content_middle_link">
          Home
        </nuxt-link>
        <nuxt-link :to="{ name: 'about' }" class="dt_defaultHeader_content_middle_link">
          About
        </nuxt-link>
        <nuxt-link :to="{ name: 'products' }" class="dt_defaultHeader_content_middle_link">
          Products
        </nuxt-link>
        <nuxt-link :to="{ name: 'contact' }" class="dt_defaultHeader_content_middle_link">
          Contact
        </nuxt-link>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="dt_defaultHeader_content_right_themeIcon"
        >
          <path v-if="( $colorMode.preference === 'dark' )" d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z" />

          <path v-if="( $colorMode.preference === 'light' )" d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />

          <path v-if="( $colorMode.preference === 'system' )" d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z" />

        </svg>
      </div>
    </div>
  </nav>
</template>

<script>
import { Component, mixins, Vue } from 'nuxt-property-decorator';
import App from '~/mixins/app';

@Component({

})

export default class DefaultHeader extends mixins(App) {

}
</script>

<style lang="scss" scoped>

</style>
