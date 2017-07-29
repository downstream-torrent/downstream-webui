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
      <torrent-list :torrents="torrents"></torrent-list>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import TorrentList from '@/components/TorrentList'
import FooterComponent from '@/components/FooterComponent'

export default {
  name: 'overview',
  components: {
    HeaderComponent,
    TorrentList,
    FooterComponent
  },
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
</style>
