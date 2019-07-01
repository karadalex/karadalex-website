<template>
  <div class="home">
    <div class="background"></div>
    <div class="header-container">
      <h1>Home</h1>
      <h2 class="subtitle">Welcome to my personal website. Have fun!</h2>
    </div>
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <h2>About me</h2>
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="col-3">
          <img src="../content/profile.jpeg" alt="profile-picture" style="width:100%">
        </div>
        <div class="col-9" v-html="aboutme"></div>
      </div>
    </div>
  </div>
</template>


<script>
import AboutMe from '../content/aboutme.json'

export default {
  data: () => ({
    aboutme: AboutMe.body
  }),
}
</script>



<style lang="scss" scoped>
.background {
  // 019 Malibu Beach - https://webgradients.com/
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}

.subtitle {
  padding-top: 1rem;
  font-weight: 100;
  font-size: 2rem;
  color: beige;
}
</style>
