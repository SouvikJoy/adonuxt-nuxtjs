<template>
  <div class="flex justify-around place-items-center">
    <div>
      &copy; {{ new Date().getFullYear() }} | <a
        href="https://debugger.tech"
        rel="noopener"
        target="_blank"
        :style="{ color: 'black', fontWeight: '700' }"
      >Debugger.tech</a>
    </div>
    <div>
      <ColorModePicker />
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
import ColorModePicker from '~/components/ColorModePicker';
@Component({
  components: { ColorModePicker }
})
export default class DefaultFooter extends mixins(App) {}
</script>

<style lang="scss">

</style>
