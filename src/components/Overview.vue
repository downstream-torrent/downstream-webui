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
  background: #efefef;
  border-bottom: 1px solid #dedede;
  @include box-sizing;

  .title {
    width: 180px;
    color: #808080;
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
    background: #fafafa;
    color: #606060;
    font-size: 12px;
    border: 1px solid #dedede;
    border-radius: 5px;
    outline: none;
    cursor: pointer;

    &:not(:first-child) {
      margin-left: 5px;
    }

    &:hover {
      background: #efefef;
    }
  }
}

.panels {
  display: flex;
  flex-grow: 1;
}

.left-sidebar {
  width: 180px;
  background: #fafafa;
  border-right: 1px solid #dedede;
  padding: 15px;

  .section {
    margin-bottom: 15px;

    .section-title {
      color: #808080;
      font-weight: 700;
      font-size: 14px;
      margin: 0;
    }

    .item {
      color: #808080;
      font-size: 14px;
      margin-top: 5px;

      &:hover {
        color: #404040;
      }

      &.active {
        color: #53C2E0;
      }
    }
  }
}

.main {
  flex-grow: 1;
}

.right-sidebar {
  width: 300px;
  background: #fafafa;
  border-left: 1px solid #dedede;
}

.bottom-panel {
  height: 300px;
  background: #fafafa;
  border-top: 1px solid #dedede;
}
</style>
