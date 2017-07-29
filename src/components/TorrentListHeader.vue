<template>
  <div class="row torrent-list-header">
    <div class="cell tiny">#</div>
    <div class="cell small">Status</div>
    <div class="cell large">Name</div>
    <div class="cell small">Size</div>
    <div class="cell small">Progress</div>
    <div class="cell small"><i class="fa fa-arrow-down"></i> Speed</div>
    <div class="cell small"><i class="fa fa-arrow-up"></i> Speed</div>
    <div class="cell small"><i class="fa fa-clock-o"></i> Remaining</div>
    <div class="cell small">Ratio</div>
  </div>
</template>

<script>
export default {
  name: 'torrent-list-header'
}
</script>

<style lang="scss" scoped>
.torrent-list-header {
  font-weight: 700;
}
</style>
