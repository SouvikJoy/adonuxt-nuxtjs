<template>
  <div class="grid grid-cols-2 place-items-center p-6">
    <p>
      &copy; {{ new Date().getFullYear() }} | Debugger.tech
    </p>
    <ColorModePicker />
  </div>
</template>
<script>
import ColorModePicker from '~/components/ColorModePicker'
export default {
  name: 'Footer',
  components: {
    ColorModePicker
  }
}
</script>
