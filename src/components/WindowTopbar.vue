<template>
  <div class="os-window-topbar">
    <div class="os-window-topbar-btns">
      <span class="bar-cls-btn"></span>
      <span class="bar-exp-btn"></span>
      <span class="bar-min-btn"></span>
    </div>
    <div class="os-window-topbar-name-container">
      <span class="os-window-topbar-name">{{ windowName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WindowTopbar',
  props: {
    windowName: String,
  }
}
</script>

<style lang="scss" scoped>
.os-window-topbar {
  width: 100%;
  height: 20px;
  background-color: #d8d8d8;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.os-window-topbar-name-container {
  text-align: left;
  width: 80%;
  display: inline-block;
}

.os-window-topbar-name {
  margin-left: 40%;
}

// Window buttons
.os-window-topbar-btns {
  text-align: left;
  width: 20%;
  display: inline-block;
}
.bar-min-btn, .bar-exp-btn, .bar-cls-btn {
  display: inline-block;
  margin-left: 10px;
  width: 12px;
  height: 12px;
  border-radius: 100%;
}

// Minimize button
.bar-min-btn {
  background-color: #29cc3f;
}

// Expand button
.bar-exp-btn {
  background-color: #ffc12e;
}

// Close button
.bar-cls-btn {
  background-color: #ff6158;
}
</style>
