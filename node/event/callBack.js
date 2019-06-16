// cb callback
function comeTo (person, thing, cb) {
  let msg = `找${person}${thing}, 飞黄腾达`
  if (person === '猛哥') {
    cb(null, msg)
  } else {
    cb({err: 'invalid'}, null)
  }
}
comeTo('猛哥', '吃鸡', (err, msg) => {
  // msg -> 找猛哥吃鸡, 飞黄腾达
  if (err) return false
  console.log(err)
  console.log(msg)
})