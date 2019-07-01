<template>
  <div class="portfolio">
    <div class="background"></div>
    <div class="header-container">
      <h1>Portfolio</h1>
    </div>
    <div class="container">
      <div class="row">
        <h2>
          Github projects 
          <a v-bind:href="'https://github.com/'+this.githubUser">
            @{{ this.githubUser }}
          </a>
        </h2>
      </div>
      <div class="row">
        <div class="col-4" v-for="(repo, key) in repos" :key="key">
          <md-card md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">{{ repo.name }}</div>
              </md-card-header>

              <md-card-content>
                {{ repo.description }}
              </md-card-content>

              <md-card-actions>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  // 021 True Sunset - https://webgradients.com/
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
}
</style>


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
    githubUser: state => state.config.githubUser
  }),

  created() {
    axios
      .get("https://api.github.com/users/"+this.githubUser+"/repos")
      .then(res => {
        this.repos = res.data
        console.log(this.repos)
      });
  }
}
</script>

