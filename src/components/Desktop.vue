<template>
  <div class="os-desktop">
    <Browser appName="about"/>
  </div>
</template>

<script>
import Browser from '@/components/Browser.vue';

export default {
  name: 'Desktop',
  components: {
    Browser
  }
}
</script>

<style lang="scss" scoped>
.os-desktop {
  position: absolute;
  top: 22px;
  left: 0;
  right: 0;
  // height: 100%;
  bottom: 70px;
}
</style>
