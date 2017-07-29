<template>
  <div class="tooltip">
    <slot name="content"></slot>
    <div class="tooltip-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tooltip'
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip-text {
  cursor: default;
  visibility: hidden;
  opacity: 0;
  color: $white;
  background: $darker-grey;
  padding: 5px 10px;
  transition: opacity 1s;
  position: absolute;
  top: 125%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  @include box-sizing;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.tooltip-text::after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent $darker-grey transparent;
}

.tooltip:hover .tooltip-text {
  opacity: 1;
  visibility: visible;
}
</style>
