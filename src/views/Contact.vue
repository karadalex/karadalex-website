<template>
  <div class="contact">
    <div class="background"></div>
    <div class="header-container">
      <h1>Contact</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <md-card class="md-elevation-10" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title"> Email</div>
              </md-card-header>
              <md-card-content>
                {{ email }}
              </md-card-content>
            </md-ripple>
          </md-card>
        </div>

        <div class="col-4">
          <md-card class="md-elevation-10" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title"> Github</div>
              </md-card-header>
              <md-card-content>
                {{ github }}
              </md-card-content>
            </md-ripple>
          </md-card>
        </div>
        <div class="col-4">
          <md-card class="md-elevation-10" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title"> LinkedIn</div>
              </md-card-header>
              <md-card-content>
                {{ linkedin }}
              </md-card-content>
            </md-ripple>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  methods: {

  },

  data: () => ({
    repos: null
  }),

  computed: mapState({
    github: state => state.config.githubUser,
    email: state => state.config.email,
    linkedin: state => state.config.linkedin,
  }),

  created() {
    
  }
}
</script>


<style lang="scss" scoped>
.background {
  // 041 Happy Acid - https://webgradients.com/
  background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
}

.md-card {
  height: 120px;
  margin-bottom: 50px;
  background-color: #37ecba;
}
</style>