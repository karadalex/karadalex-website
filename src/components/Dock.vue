<template>
  <div class="os-dock">
    <div class="os-dock-bg"></div>
    <div class="os-dock-icons">
      <div class="os-dock-icon">
        <img src="../assets/file-manager.svg"/>
        <div class="os-dock-icon-text">Finder</div>
      </div>
      <div class="os-dock-icon">
        <img src="../assets/preferences-system.svg"/>
        <div class="os-dock-icon-text">Preferences</div>
      </div>
      <div class="os-dock-icon">
        <img src="../assets/terminal.svg"/>
        <div class="os-dock-icon-text">Terminal</div>
      </div>
      <div class="os-dock-icon">
        <img src="../assets/xpad.svg"/>
        <div class="os-dock-icon-text">Notes</div>
      </div>
      <div class="os-dock-icon">
        <img src="../assets/calculator.svg"/>
        <div class="os-dock-icon-text">Calculator</div>
      </div>
      <div class="os-dock-icon">
        <img src="../assets/web-browser.svg"/>
        <div class="os-dock-icon-text">Browser</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dock',

  data() {
    return {
      icons: ["file-manager.svg"],
      openedApps: []
    }
  }
}
</script>

<style lang="scss" scoped>
.os-dock {
  width: 50vw;
  background: inherit;
  position: absolute;
  bottom: 0;
  left: 25vw;
  right: 25vw;
  height: 70px;
}

.os-dock-bg{
  width: 50vw;
  background: inherit;
  position: absolute;
  bottom: 0;
  // left: 25vw;
  // right: 25vw;
  height: 70px;
  overflow: hidden;
  // margin-left: -175px;
  // margin-top: -250px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0px 0px 10px rgba(49, 49, 49, 0.582);
}

.os-dock-bg:before{
  width: 60vw;
  height: 500px;
  content: "";
  position: absolute;
  top: -25px;
  left: -25px;
  bottom: 0;
  right: 0;
  background: inherit;
  box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.438);
  filter: blur(10px);
}

.os-dock-icons {
  text-align: left;
  position: absolute;
  right: 0;
  left: 0;
}

.os-dock-icon {
  text-align: center;
  margin-left: 20px;
  margin-top: 3px;
  width: 60px;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }

  & img {
    width: 50px;
  }

  & .os-dock-icon-text {
    font-size: 12px;
    font-weight: 600;
    margin-top: -4px;
  }
}
</style>


