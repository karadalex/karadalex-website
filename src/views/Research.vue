<template>
  <div class="research">
    <div class="background"></div>
    <div class="header-container">
      <h1>Research</h1>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input v-model="publishedEnabled" type="checkbox">
            </div>
          </div>
          <div class="input-group-append">
            <span class="input-group-text">Published papers</span>
          </div>

          <div class="input-group-prepend">
            <div class="input-group-text">
              <input v-model="researchgateEnabled" type="checkbox">
            </div>
          </div>
          <div class="input-group-append">
            <span class="input-group-text">ResearchGate papers</span>
          </div>
        </div>
      </div>

      <template v-if="publishedEnabled">
        <div class="row">
          <h2>
            Published papers
          </h2>
        </div>
        <div class="row">
          <!-- <div class="col-4" v-for="(repo, key) in repos" :key="key">
            <md-card class="md-elevation-10" md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">{{ repo.name }}</div>
                </md-card-header>

                <md-card-content>
                  {{ repo.description }}
                </md-card-content>
              </md-ripple>
            </md-card>
          </div> -->
        </div>
      </template>

      <template v-if="researchgateEnabled">
        <div class="row">
          <h2>
            ResearchGate papers
          </h2>
        </div>
        <div class="row">
          <!-- <div class="col-4" v-for="(repo, key) in repos" :key="key">
            <md-card class="md-elevation-10" md-with-hover>
              <md-ripple>
                <md-card-header>
                  <div class="md-title">{{ repo.name }}</div>
                </md-card-header>

                <md-card-content>
                  {{ repo.description }}
                </md-card-content>
              </md-ripple>
            </md-card>
          </div> -->
        </div>
      </template>
    </div>
  </div>
</template>


<script>
export default {
  methods: {

  },

  data: () => ({
    publishedEnabled: true,
    researchgateEnabled: true
  })
}
</script>


<style lang="scss" scoped>
.background {
  // 085 October Silence - https://webgradients.com/
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
}
</style>
