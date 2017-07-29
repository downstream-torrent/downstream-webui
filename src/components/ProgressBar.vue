<template>
  <div class="progress-bar-container" >
    <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
    <div class="progress-text">{{progress}}%</div>
  </div>
</template>

<script>
export default {
  name: 'progress-bar',
  props: ['progress']
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.progress-bar-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.progress-bar {
  position: absolute;
  width: 0;
  height: 100%;
  background: lighten($blue, 10%);
  border: 1px solid $blue;
  border-radius: 5px;
  @include box-sizing;
}

.progress-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 1;
}
</style>
