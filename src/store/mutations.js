export default {
  SOCKET_CONNECT (state) {
    state.connect = true
  },
  SOCKET_DISCONNECT (state) {
    state.connect = false
  },
  SOCKET_LIST (state, { list }) {
    state.list = list
  }
}
