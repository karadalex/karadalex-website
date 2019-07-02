<template>
  <div id="app">
		<template v-if="$route.name !== 'computer'">
      <nav class="navbar navbar-expand-sm navbar-light container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav justify-content-center">
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
    <router-view class="router-view"/>
  </div>
</template>


<script>
import jquery from 'jquery'
import Collapse from '../node_modules/bootstrap/js/dist/collapse.js'

export default {
  
}
</script>


<style lang="scss">
@import './styles/main.scss';
</style>
