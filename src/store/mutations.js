export default {
  SOCKET_CONNECT (state) {
    state.connect = true
  },
  list (state, { list }) {
    state.list = list
  }
}
