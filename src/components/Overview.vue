<template>
  <div class="overview">
    <div class="header">
      <h1 class="title">Downstream</h1>
      <div class="left-toolbar">
        <button><i class="fa fa-plus"></i></button>
        <button><i class="fa fa-trash"></i></button>
        <button><i class="fa fa-pause"></i></button>
        <button><i class="fa fa-play"></i></button>
        <button><i class="fa fa-arrow-up"></i></button>
        <button><i class="fa fa-arrow-down"></i></button>
      </div>
      <div class="right-toolbar">
        <button><i class="fa fa-cog"></i></button>
        <button><i class="fa fa-question"></i></button>
      </div>
    </div>
    <div class="panels">
      <div class="left-sidebar">
        <div class="section">
          <h2 class="section-title">Torrent Status</h2>
          <div class="item active"><i class="fa fa-circle-o"></i> All</div>
          <div class="item"><i class="fa fa-arrow-circle-o-down"></i> Downloading</div>
          <div class="item"><i class="fa fa-check-circle-o"></i> Complete</div>
          <div class="item"><i class="fa fa-pause-circle-o"></i> Paused</div>
          <div class="item"><i class="fa fa-stop-circle-o"></i> Stalled</div>
          <div class="item"><i class="fa fa-times-circle-o"></i> Error</div>
        </div>
        <div class="section">
          <h2 class="section-title">Trackers</h2>
          <div class="item active"><i class="fa fa-circle-o"></i> All</div>
        </div>
      </div>
      <div class="main">
        {{$store.state.connect}}
      </div>
    </div>
    <div class="footer">
      <span>Made with <i class="fa fa-heart heart"></i> by Brendan Goodenough</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'overview'
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.overview {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

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
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    padding: 15px;
  }

  .left-toolbar {
    flex-grow: 1;
    padding: 15px;
  }

  .right-toolbar {
    padding: 15px;
  }

  button {
    height: 30px;
    padding: 0 15px;
    background: $lightest-grey;
    color: $dark-grey;
    font-size: 12px;
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
}

.panels {
  display: flex;
  flex-grow: 1;
}

.left-sidebar {
  width: 180px;
  background: $lightest-grey;
  border-right: 1px solid $light-grey;
  padding: 15px;

  .section {
    margin-bottom: 15px;

    .section-title {
      color: $medium-grey;
      font-weight: 700;
      font-size: 14px;
      margin: 0;
    }

    .item {
      color: $medium-grey;
      font-size: 14px;
      margin-top: 5px;

      &:hover {
        color: $darker-grey;
      }

      &.active {
        color: $blue;
      }
    }
  }
}

.main {
  flex-grow: 1;
}

.right-sidebar {
  width: 300px;
  background: $lightest-grey;
  border-left: 1px solid $light-grey;
}

.footer {
  background: $light-grey;
  color: $medium-grey;
  font-size: 12px;
  padding: 15px;
  text-align: right;

  .heart {
    color: $red;
  }
}
</style>
