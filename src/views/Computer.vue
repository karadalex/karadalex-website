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
