<template>
  <div class="os-topbar">
    <div class="os-topbar-left"></div>
    <div class="os-topbar-right">
      <div class="os-topbar-right-el">
        <router-link to="/home">Switch to classic view</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  props: {},
}
</script>

<style lang="scss" scoped>
.os-topbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 22px;
  background-color: #d8d8d8;
  box-shadow: 0px 0px 10px rgba(49, 49, 49, 0.582);
  border-bottom: 1px solid #a1a1a1;
}

.os-topbar-left {
  text-align: left;
}

.os-topbar-right {
  text-align: right;
}

.os-topbar-left-el, .os-topbar-right-el {
  display: inline-block;
  & a {
    color: black;
    text-decoration: none;
  }
}

.os-topbar-right-el {
  margin-right: 20px;
}
</style>


