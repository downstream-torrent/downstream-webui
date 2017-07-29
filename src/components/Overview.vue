<template>
  <div class="overview">
    <header-component></header-component>
    <div class="panels">
      <div class="left-sidebar">
        <div class="section">
          <h2 class="section-title">Torrent Status</h2>
          <div class="item active"><i class="fa fa-circle-o"></i> All ({{torrents.length}})</div>
          <div class="item"><i class="fa fa-arrow-circle-o-down"></i> Downloading</div>
          <div class="item"><i class="fa fa-arrow-circle-o-up"></i> Seeding</div>
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
            <div class="cell large">Name</div>
            <div class="cell small">Size</div>
            <div class="cell small">Progress</div>
            <div class="cell small"><i class="fa fa-arrow-down"></i> Speed</div>
            <div class="cell small"><i class="fa fa-arrow-up"></i> Speed</div>
            <div class="cell small"><i class="fa fa-clock-o"></i> Remaining</div>
            <div class="cell small">Ratio</div>
          </div>

          <div class="row" v-for="torrent in torrents" @click="select(torrent)" :class="{ selected: selected[torrent.infoHash] }">
            <div class="cell large">{{torrent.name}}</div>
            <div class="cell small">{{torrent.length}}</div>
            <div class="cell small">{{torrent.progress}}</div>
            <div class="cell small">{{torrent.downloadSpeed}}</div>
            <div class="cell small">{{torrent.uploadSpeed}}</div>
            <div class="cell small">{{torrent.timeRemaining}}</div>
            <div class="cell small">{{torrent.ratio}}</div>
          </div>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import FooterComponent from '@/components/FooterComponent'

function select (torrent) {
  this.selected = Object.assign({}, this.selected, {
    [torrent.infoHash]: !this.selected[torrent.infoHash]
  })
}

export default {
  name: 'overview',
  components: {
    HeaderComponent,
    FooterComponent
  },
  computed: {
    torrents () {
      return this.$store.getters.torrents
    }
  },
  data: () => ({
    selected: {}
  }),
  methods: {
    select
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
  display: flex;
  flex-grow: 1;
  overflow: auto;

  .table {
    flex-grow: 1;
  }

  .row {
    display: flex;
    border-bottom: 1px solid $lighter-grey;

    &:nth-child(odd) {
      background: $lightest-grey;
    }

    &.table-header {
      font-weight: 700;
    }

    &.selected {
      background: $lighter-grey
    }

    .cell {
      flex-grow: 1;
      width: 100%;
      color: $medium-grey;
      padding: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      cursor: pointer;
      border-right: 1px solid $lighter-grey;

      &.large {
        width: 300px;
        flex-shrink: 0.1;
      }

      &.small {
        width: 120px;
        flex-shrink: 0;
      }
    }
  }
}
</style>
