const Events = require('events')
const ev = new Events()
const request = require('./lib/request.js')
const Player = require('player')
// ev.on(''search)

;['search','choose'].forEach(evName => {
  const fn = require(`./lib/${evName}`)
  ev.on(evName, async (...args) => {
    const res =  await fn(...args)
    ev.emit('handle', evName, res, ...args)
  })
})
ev.on('afterSearch', (res, keyWord) => {
  if (!res.result || !res.result.songs) {
    console.log(`没有搜到${keyWord}的信息`)
    return false
  }
  const songs = res.result.songs
  ev.emit('choose', songs)
})
ev.on('afterChoose', async (selected, songs) => {
  const selectedSong = songs.find((song, i) => {
    return selected.song === `${i}.${song.name}`
  })
  if (selectedSong) {
    const {id} = selectedSong
    // 请求歌曲的详情
    let url = 'http://neteasecloudmusicapi.zhaoboy.com/song/url?id=' + id
    const songDetail = await request(url)
    const {url: songUrl} = songDetail.data[0]
    // 少安装了了player插件
    const player = new Player(songUrl)
    player.play()
  }
})
ev.on('handle', (key, res, ...args) => {
  switch (key) {
    case 'search':
      return ev.emit('afterSearch', res, args[0])
    case 'choose':
      return ev.emit('afterChoose', res, args[0])
  }
})
function main () {
  const argv = process.argv.slice(2)
  let keyWord = argv[0]
  ev.emit('search', keyWord)
  // console.log(keyWord)
}
main()