const http = require('http')

http.createServer((req, res) => {
  res.writeHead(301, {'Location': 'http://itbilu.com/'})
  console.log(res._header)
  res.end()
})
.listen(3000, () => {
  console.log('server is running 3000')
})