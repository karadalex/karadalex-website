<template>
  <div class="operating-system-view">
    <router-link to="/home">Switch View</router-link>
    <!-- <Browser app="about"/> -->
    <Topbar/>
    <Dock />
  </div>
</template>

<script>
// @ is an alias to /src
import Browser from '@/components/Browser.vue';
import Topbar from '@/components/Topbar.vue';
import Dock from '@/components/Dock.vue';

export default {
  name: 'computer',
  components: {
    Browser, Topbar, Dock
  },
};
</script>

<style lang="scss">
.operating-system-view {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: url("../assets/wallpaper.jpg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

