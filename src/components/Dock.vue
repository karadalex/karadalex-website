<template>
  <div class="os-dock">

  </div>
</template>

<script>
export default {
  name: 'Dock'
}
</script>

<style lang="scss" scoped>
// .os-dock {
//   position: absolute;
//   bottom: 0;
//   left: 25vw;
//   right: 25vw;
//   height: 70px;
//   // background-color: #cccccc;
//   border-radius: 5px;
//   background: inherit;
// }

// .os-dock:before{
//   content: “ ”;
//   background: inherit; 
//   position: absolute;
//   left: 25vw;
//   right: 25vw;
//   bottom: 0;
//   box-shadow: inset 0 0 0 200px rgba(255,255,255,0.2);
//   filter: blur(10px);
// }

.os-dock{
  width: 50vw;
  background: inherit;
  position: absolute;
  bottom: 0;
  left: 25vw;
  right: 25vw;
  height: 70px;
  overflow: hidden;
  // margin-left: -175px;
  // margin-top: -250px;
  border-radius: 8px;
}

.os-dock:before{
  width: 60vw;
  height: 500px;
  content: "";
  position: absolute;
  top: -25px;
  left: -25px;
  bottom: 0;
  right: 0;
  background: inherit;
  box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.3);
  filter: blur(10px);
}

</style>


