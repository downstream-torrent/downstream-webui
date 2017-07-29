<template>
  <div class="header">
    <h1 class="title">Downstream</h1>
    <div class="left-toolbar">
      <button><i class="fa fa-plus"></i></button>
      <button><i class="fa fa-trash"></i></button>
      <div class="button-separator"></div>
      <button><i class="fa fa-pause"></i></button>
      <button><i class="fa fa-play"></i></button>
      <button><i class="fa fa-arrow-up"></i></button>
      <button><i class="fa fa-arrow-down"></i></button>
      <div class="button-separator"></div>
      <button><i class="fa fa-magnet"></i></button>
      <button><i class="fa fa-tv"></i></button>
    </div>
    <div class="right-toolbar">
      <button><i class="fa fa-cog"></i></button>
      <button><i class="fa fa-question"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-component'
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.header {
  display: flex;
  width: 100%;
  height: 60px;
  background: $lighter-grey;
  border-bottom: 1px solid $light-grey;
  @include box-sizing;

  .title {
    width: 180px;
    color: $medium-grey;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    padding: 15px;
  }

  .left-toolbar {
    display: flex;
    flex-grow: 1;
    padding: 10px;
  }

  .right-toolbar {
    padding: 10px;
  }

  button {
    height: 40px;
    padding: 0 20px;
    background: $lightest-grey;
    color: $dark-grey;
    font-size: 16px;
    border: 1px solid $light-grey;
    border-radius: 5px;
    outline: none;
    cursor: pointer;

    &:not(:first-child) {
      margin-left: 5px;
    }

    &:hover {
      background: $lighter-grey;
    }
  }

  .button-separator {
    margin-left: 15px;
  }
}
</style>
