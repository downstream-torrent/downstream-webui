import socket from '../sockets'

export default {
  socket_connect (context) {
    socket.emit('list_torrents')
  }
}
