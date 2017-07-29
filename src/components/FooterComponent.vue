<template>
  <div class="footer">
    <span>Made with <i class="fa fa-heart heart"></i> by Brendan Goodenough</span>
  </div>
</template>

<script>
export default {
  name: 'footer-component'
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.footer {
  background: $lightest-grey;
  color: $medium-grey;
  font-size: 12px;
  padding: 15px;
  text-align: center;
  border-top: 1px solid $light-grey;

  .heart {
    color: $red;
  }
}
</style>
