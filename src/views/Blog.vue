<template>
  <div class="blog">
    <div class="background"></div>
    <div class="header-container">
      <h1>Blog</h1>
    </div>

    <div class="container post-preview" v-for="(post, key) in posts" :key="key">
      <div class="row"><h2>{{post.title}}</h2></div>
      <div class="row">{{post.date}} | {{post.readtime}} min read</div>
      <div class="row">
        <p>{{post.excerpt}}</p>
      </div>
      <div class="row"><a href="http://">read more ...</a></div>
    </div>
  </div>
</template>


<script>
import Posts from '../content/posts.json'

export default {
  data: () => ({
    posts: Posts
  }),
}
</script>



<style lang="scss" scoped>
.background {
  // 079 Summer Games - https://webgradients.com/
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
}

.post-preview {
  margin-top: 30px;
}
</style>
