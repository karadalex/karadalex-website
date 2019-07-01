<template>
  <div id="app">
		<template v-if="$route.name !== 'computer'">
      <nav class="navbar navbar-expand-sm navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cv">Curriculum Vitae</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/research">Research</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/press">Press</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sim">Switch View</router-link>
            </li>
          </ul>
        </div>
      </nav>
		</template>
    <router-view/>
  </div>
</template>


<script>
import jquery from 'jquery'
import Collapse from '../node_modules/bootstrap/js/dist/collapse.js'

export default {
  
}
</script>


<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.background {
  position: absolute;
}

.background, .header-container {
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 40vh;
}

h1 {
  padding-top: 2rem;
  font-weight: 300;
  font-size: 5rem;
  color: beige;
}
</style>
