<template>
  <div class="overview">
    <header-component></header-component>
    <div class="panels">
      <div class="left-sidebar">
        <div class="section">
          <h2 class="section-title">Torrent Status</h2>
          <div class="item" @click="filter = null" :class="{ active: filter === null }">
            <i class="fa fa-circle-o"></i> All ({{torrents.length}})
          </div>
          <div class="item" v-if="statuses.downloading" @click="filter = 'downloading'" :class="{ active: filter === 'downloading' }">
            <i class="fa fa-arrow-circle-o-down"></i> Downloading ({{statuses.downloading}})
          </div>
          <div class="item" v-if="statuses.seeding" @click="filter = 'seeding'" :class="{ active: filter === 'seeding' }">
            <i class="fa fa-arrow-circle-o-up"></i> Seeding ({{statuses.seeding}})
          </div>
          <div class="item" v-if="statuses.complete" @click="filter = 'complete'" :class="{ active: filter === 'complete' }">
            <i class="fa fa-check-circle-o"></i> Complete ({{statuses.complete}})
          </div>
          <div class="item" v-if="statuses.paused" @click="filter = 'paused'" :class="{ active: filter === 'paused' }">
            <i class="fa fa-pause-circle-o"></i> Paused ({{statuses.paused}})
          </div>
          <div class="item" v-if="statuses.stalled" @click="filter = 'stalled'" :class="{ active: filter === 'stalled' }">
            <i class="fa fa-stop-circle-o"></i> Stalled ({{statuses.stalled}})
          </div>
          <div class="item" v-if="statuses.error" @click="filter = 'error'" :class="{ active: filter === 'error' }">
            <i class="fa fa-times-circle-o"></i> Error ({{statuses.error}})
          </div>
        </div>
      </div>
      <torrent-list :torrents="filteredTorrents"></torrent-list>
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
  data: () => ({
    filter: null
  }),
  created: function () {
    this.onPaste = onPaste.bind(this)
    document.addEventListener('paste', this.onPaste)
  },
  destroyed: function () {
    document.removeEventListener('paste', this.onPaste)
  },
  computed: {
    filteredTorrents () {
      return this.$store.getters.torrents.filter(t => this.filter ? t.status === this.filter : t)
    },
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
  width: 200px;
  background: $lightest-grey;
  flex-shrink: 0;
  border-right: 1px solid $light-grey;

  .section {
    margin-bottom: 15px;

    .section-title {
      color: $medium-grey;
      font-weight: 700;
      font-size: 16px;
      margin: 0;
      padding: 15px;
    }

    .item {
      height: 50px;
      color: $medium-grey;
      font-size: 16px;
      padding: 0 15px;
      cursor: pointer;
      line-height: 50px;

      i {
        font-size: 18px;
        padding-right: 5px;
      }

      &.active {
        color: $darker-grey;
        background: $light-grey;
      }
    }
  }
}
</style>
