<template>
  <div class="header">
    <h1 class="title">Downstream</h1>
    <div class="left-toolbar">
      <Tooltip>
        <span slot="text">Add</span>
        <button slot="content"><i class="fa fa-plus"></i></button>
      </Tooltip>
      <Tooltip>
        <span slot="text">Remove</span>
        <button class="disabled" slot="content"><i class="fa fa-trash"></i></button>
      </Tooltip>
      <div class="button-separator"></div>
      <Tooltip>
        <span slot="text">Pause</span>
        <button class="disabled" slot="content"><i class="fa fa-pause"></i></button>
      </Tooltip>
      <Tooltip>
        <span slot="text">Resume</span>
        <button class="disabled" slot="content"><i class="fa fa-play"></i></button>
      </Tooltip>
      <Tooltip>
        <span slot="text">Move up</span>
        <button class="disabled" slot="content"><i class="fa fa-arrow-up"></i></button>
      </Tooltip>
      <Tooltip>
        <span slot="text">Move down</span>
        <button class="disabled" slot="content"><i class="fa fa-arrow-down"></i></button>
      </Tooltip>
      <div class="button-separator"></div>
      <Tooltip>
        <span slot="text">Copy magnet</span>
        <button class="disabled" slot="content"><i class="fa fa-magnet"></i></button>
      </Tooltip>
      <Tooltip>
        <span slot="text">Stream</span>
        <button class="disabled" slot="content"><i class="fa fa-tv"></i></button>
      </Tooltip>
    </div>
    <div class="right-toolbar">
      <Tooltip>
        <span slot="text">Settings</span>
        <button slot="content"><i class="fa fa-cog"></i></button>
      </Tooltip>
    </div>
  </div>
</template>

<script>
import Tooltip from '@/components/Tooltip'

export default {
  name: 'header-component',
  components: {
    Tooltip
  }
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
    padding: 10px 5px;
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

    &.disabled {
      background: $lighter-grey;
      color: $light-grey;
      cursor: default;
    }
  }

  .button-separator {
    margin-left: 15px;
  }
}

.tooltip {
  margin-left: 5px;
}
</style>
