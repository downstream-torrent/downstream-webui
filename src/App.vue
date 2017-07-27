<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './styles/styles.scss';

#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
