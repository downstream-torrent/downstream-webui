import bytes from 'bytes'

export default {
  torrents: state => {
    return state.torrents.map(torrent => ({
      name: torrent.name,
      length: bytes(torrent.length),
      progress: `${(torrent.progress * 100).toFixed(2)}%`,
      downloadSpeed: `${bytes(torrent.downloadSpeed)}/s`,
      uploadSpeed: `${bytes(torrent.uploadSpeed)}/s`
    }))
  }
}
