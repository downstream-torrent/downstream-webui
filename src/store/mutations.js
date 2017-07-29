export default {
  SOCKET_CONNECT (state) {
    state.connect = true
  },
  SOCKET_DISCONNECT (state) {
    state.connect = false
  },
  SOCKET_TORRENT_LIST (state, torrents) {
    state.torrents = torrents
  },
  SOCKET_TORRENT_ADDED (state, torrent) {
    if (!state.torrents.find(t => t.infoHash === torrent.infoHash)) {
      state.torrents.push(torrent)
    } else {
      state.torrents = state.torrents.map(t => t.infoHash === torrent.infoHash ? torrent : t)
    }
  },
  SOCKET_TORRENT_REMOVED (state, torrent) {
    state.torrents = state.torrents.filter(t => t.infoHash !== torrent.infoHash)
  },
  SOCKET_TORRENT_DOWNLOAD (state, torrent) {
    state.torrents = state.torrents.map(t => t.infoHash === torrent.infoHash ? torrent : t)
  },
  SOCKET_TORRENT_UPLOAD (state, torrent) {
    state.torrents = state.torrents.map(t => t.infoHash === torrent.infoHash ? torrent : t)
  }
}
