<template>
  <div class="browser">
    <Window :appName="appName">
      <iframe :src="'/#/'+appName"></iframe>
    </Window>
  </div>
</template>

<script>
import Window from '@/components/Window.vue';

export default {
  name: 'Browser',
  components: {
    Window
  },
  props: {
    appName: String,
  },
};
</script>

<style lang="scss" scoped>

</style>
