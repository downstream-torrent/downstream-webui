<template>
  <div class="overview">
    <header-component></header-component>
    <div class="panels">
      <div class="left-sidebar">
        <div class="section">
          <h2 class="section-title">Torrent Status</h2>
          <div class="item active"><i class="fa fa-circle-o"></i> All ({{torrents.length}})</div>
          <div class="item"><i class="fa fa-arrow-circle-o-down"></i> Downloading ({{statuses.downloading}})</div>
          <div class="item"><i class="fa fa-arrow-circle-o-up"></i> Seeding ({{statuses.seeding}})</div>
          <div class="item"><i class="fa fa-check-circle-o"></i> Complete ({{statuses.complete}})</div>
          <div class="item"><i class="fa fa-pause-circle-o"></i> Paused ({{statuses.paused}})</div>
          <div class="item"><i class="fa fa-stop-circle-o"></i> Stalled ({{statuses.stalled}})</div>
          <div class="item"><i class="fa fa-times-circle-o"></i> Error ({{statuses.error}})</div>
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

function onPaste (e) {
  e.clipboardData.getData('text').split('\n').forEach(id => {
    if (id !== '') {
      this.$store.dispatch('add_torrent', id)
    }
  })
}

export default {
  name: 'overview',
  components: {
    HeaderComponent,
    TorrentList,
    FooterComponent
  },
  created: function () {
    this.onPaste = onPaste.bind(this)
    document.addEventListener('paste', this.onPaste)
  },
  destroyed: function () {
    document.removeEventListener('paste', this.onPaste)
  },
  computed: {
    torrents () {
      return this.$store.getters.torrents
    },
    statuses () {
      const statuses = {
        downloading: 0,
        seeding: 0,
        complete: 0,
        paused: 0,
        stalled: 0,
        error: 0
      }

      this.$store.getters.torrents.forEach(torrent => {
        if (statuses[torrent.status] >= 0) {
          statuses[torrent.status] += 1
        }
      })

      return statuses
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
