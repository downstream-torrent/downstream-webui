import bytes from 'bytes'
import moment from 'moment'

export default {
  torrents: (state, getters) => {
    return state.torrents.map(torrent => ({
      infoHash: torrent.infoHash,
      name: torrent.name,
      length: bytes(torrent.length),
      progress: `${(torrent.progress * 100).toFixed(2)}%`,
      downloadSpeed: `${bytes(torrent.downloadSpeed)}/s`,
      uploadSpeed: `${bytes(torrent.uploadSpeed)}/s`,
      timeRemaining: moment.utc(torrent.timeRemaining).format('HH:mm:ss'),
      ratio: torrent.ratio
    }))
  }
}
