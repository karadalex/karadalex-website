<template>
  <div class="os-icon">
    <div class="os-icon-image"></div>
    <div class="os-icon-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'Icon',

  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
.os-icon {
  width: 60px;
  margin-top: 30px;
  margin-left: 30px;
  &:hover {
    cursor: pointer;
  }
}

.os-icon-image {
  width: 60px;
  height: 55px;
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  border-radius: 5px;
}

.os-icon-text {
  width: 60px;
  text-align: center;
  color: #ffffff;
  font-weight: 500;
}
</style>
