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
        <div class="table">
          <div class="row table-header">
            <td class="cell name">Name</td>
            <td class="cell">Size</td>
            <td class="cell">Progress</td>
            <td class="cell"><i class="fa fa-arrow-down"></i> Speed</td>
            <td class="cell"><i class="fa fa-arrow-up"></i> Speed</td>
          </div>

          <div class="row" v-for="torrent in torrents">
            <div class="cell name">{{torrent.name}}</div>
            <div class="cell">{{torrent.length}}</div>
            <div class="cell">{{torrent.progress}}</div>
            <div class="cell">{{torrent.downloadSpeed}}</div>
            <div class="cell">{{torrent.uploadSpeed}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>Made with <i class="fa fa-heart heart"></i> by Brendan Goodenough</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'overview',
  computed: {
    torrents () {
      return this.$store.getters.torrents
    }
  }
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
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    padding: 15px;
  }

  .left-toolbar {
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
}

.panels {
  display: flex;
  flex-grow: 1;
}

.left-sidebar {
  width: 180px;
  background: $lightest-grey;
  flex-shrink: 0;
  border-right: 1px solid $light-grey;
  padding: 15px;

  .section {
    margin-bottom: 15px;

    .section-title {
      color: $medium-grey;
      font-weight: 700;
      font-size: 18px;
      margin: 0;
    }

    .item {
      color: $medium-grey;
      font-size: 16px;
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

  .row {
    width: 100%;
    display: flex;
    border-bottom: 1px solid $lighter-grey;

    &:nth-child(odd) {
      background: $lightest-grey;
    }

    &.table-header {
      font-weight: 700;
    }

    .cell {
      flex-grow: 1;
      width: 100%;
      color: $medium-grey;
      padding: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
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
