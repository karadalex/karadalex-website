<template>
  <div class="browser">
    {{ app }}
    <iframe :src="'/#/'+app"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Browser',
  props: {
    app: String,
  },
};
</script>
