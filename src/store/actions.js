import socket from '../sockets'

export default {
  add_torrent (context, torrent) {
    socket.emit('add_torrent', torrent)
  },
  socket_connect (context) {
    socket.emit('list_torrents')
  }
}
