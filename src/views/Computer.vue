<template>
  <div class="operating-system-view">
    <h1>Operating System</h1>
    <router-link to="/home">Switch View</router-link>
    <Browser app="about"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Browser from '@/components/Browser.vue';

export default {
  name: 'computer',
  components: {
    Browser,
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

