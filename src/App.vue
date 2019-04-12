<template>
  <div id="app">
		<template v-if="$route.name !== 'computer'">
			<div id="nav">
				<router-link to="/home">Home</router-link> |
				<router-link to="/about">About</router-link> |
				<router-link to="/contact">Contact</router-link> |
				<router-link to="/blog">Blog</router-link> |
				<router-link to="/portfolio">Portfolio</router-link> |
				<router-link to="/cv">Curriculum Vitae</router-link> |
				<router-link to="/press">Press</router-link> |
				<router-link to="/">Switch View</router-link>
			</div>
		</template>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
