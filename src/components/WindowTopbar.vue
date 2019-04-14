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
  height: 25px;
  background-color: #d8d8d8;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.os-window-topbar-name-container {
  text-align: left;
  width: 70%;
  display: inline-block;
}

.os-window-topbar-name {
  margin-left: 30%;
}

// Window buttons
.os-window-topbar-btns {
  text-align: left;
  width: 30%;
  display: inline-block;
  cursor: default;
}
.bar-min-btn, .bar-exp-btn, .bar-cls-btn {
  display: inline-block;
  margin-left: 10px;
  margin-top: 5px;
  width: 15px;
  height: 15px;
  border-radius: 100%;

  &:hover {
    cursor: pointer;
  }
}

// Minimize button
.bar-min-btn {
  background-color: #29cc3f;
  &:hover {
    background-color: #008a12;
  }
}

// Expand button
.bar-exp-btn {
  background-color: #ffc12e;
  &:hover {
    background-color: #c98c00;
  }
}

// Close button
.bar-cls-btn {
  background-color: #ff6158;
  &:hover {
    background-color: #ff2b1f;
  }
}
</style>
