<template>
  <div class="os-desktop">
    <div class="home-desktop-icon"></div>
    <template v-for="(icon, index) in icons">
      <Icon :text="icon" :key="'icon-'+index" v-on:dblclick.native="iconClicked(icon)"/>
    </template>
    <template v-for="(app, index) in openedApps">
      <Browser :appName="app" :key="'app-'+index"/>
    </template>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';
import Browser from '@/components/Browser.vue';

export default {
  name: 'Desktop',

  data() {
    return {
      icons: ["home", "cv", "portfolio", "blog", "research", "contact"],
      openedApps: []
    }
  },

  components: {
    Icon, Browser
  },

  methods: {
    iconClicked: function (appName) {
      console.log(appName + " was clicked");
      this.openedApps.push(appName);
    }
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
