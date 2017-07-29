import bytes from 'bytes'
import moment from 'moment'

export default {
  torrents: (state, getters) => {
    return state.torrents.map(torrent => ({
      infoHash: torrent.infoHash,
      name: torrent.name,
      length: bytes(torrent.length),
      progress: (torrent.progress * 100).toFixed(2),
      downloadSpeed: `${bytes(torrent.downloadSpeed)}/s`,
      uploadSpeed: `${bytes(torrent.uploadSpeed)}/s`,
      timeRemaining: moment(torrent.timeRemaining).isValid() ? moment.utc(torrent.timeRemaining).format('HH:mm:ss') : 'Unknown',
      ratio: torrent.ratio.toFixed(2),
      status: torrent.status,
      queuePosition: torrent.queuePosition
    }))
  }
}
