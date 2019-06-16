// 原生的一个模块
// 供其他模板使用 比如 http中的res 继承自Events
const Events = require('events')
const ev = new Events()

ev.on('open', () => {
  console.log('open 发生了')
})
function callBack () {
  console.log('第二个回调')
}
ev.on('open', callBack)
ev.emit('open')
ev.removeListener('open', callBack)
ev.emit('open')

// once 只会绑定一次事件
ev.once('one', (data) => {
  console.log(data)
})

ev.emit('one', 'from emit data')
ev.emit('one')