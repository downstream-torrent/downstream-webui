<template>
  <div class="torrent-list">
    <div class="torrents">
      <torrent-list-header></torrent-list-header>
      <torrent-list-item v-for="torrent in torrents" :key="torrent.infoHash" :torrent="torrent"></torrent-list-item>
    </div>
  </div>
</template>

<script>
import TorrentListHeader from '@/components/TorrentListHeader'
import TorrentListItem from '@/components/TorrentListItem'

export default {
  name: 'torrent-list',
  components: {
    TorrentListHeader,
    TorrentListItem
  },
  props: ['torrents']
}
</script>

<style lang="scss" scoped>
.torrent-list {
  display: flex;
  flex-grow: 1;
  overflow: auto;
}

.torrents {
  flex-grow: 1;
}
</style>
