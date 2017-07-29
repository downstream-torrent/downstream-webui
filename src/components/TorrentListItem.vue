<template>
  <div class="row torrent-list-item" @click="select(torrent)" :class="{ selected: selected[torrent.infoHash] }">
    <div class="cell large">{{torrent.name}}</div>
    <div class="cell small">{{torrent.length}}</div>
    <div class="cell small">{{torrent.progress}}</div>
    <div class="cell small">{{torrent.downloadSpeed}}</div>
    <div class="cell small">{{torrent.uploadSpeed}}</div>
    <div class="cell small">{{torrent.timeRemaining}}</div>
    <div class="cell small">{{torrent.ratio}}</div>
  </div>
</template>

<script>
function select (torrent) {
  this.selected = Object.assign({}, this.selected, {
    [torrent.infoHash]: !this.selected[torrent.infoHash]
  })
}

export default {
  name: 'torrent-list-item',
  props: ['torrent'],
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

.torrent-list-item {
  &:nth-child(odd) {
    background: $lightest-grey;
  }

  &.selected {
    background: $lighter-grey
  }
}
</style>
