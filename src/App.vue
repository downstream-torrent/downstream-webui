<template>
  <div id="app">
    <router-view v-if="$store.state.connect"></router-view>
    <div class="waiting" v-else>
      <h1 class="title">Downstream</h1>
      Attempting to establish a connection...
    </div>
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
  overflow: hidden;
}

.waiting {
  position: absolute;
  top: 50%;
  left: 50%;
  color: $medium-grey;
  text-align: center;
  transform: translate(-50%, -50%);

  .title {
    margin: 0;
    font-weight: 400;
  }
}
</style>
