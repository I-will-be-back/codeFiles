class Router {
  constructor (options) {
    // 将数组配置项, 转变成json
    this.init()
    this.routes = {}
    this.bindEvent()
    options.forEach(item => {
      this.route(item.path, () => {
        document.querySelector('#content').innerHTML = item.component
      })
    })
  }
  init () {
    window.addEventListener('load', this.updateView.bind(this), false)
    window.addEventListener('popstate', this.updateView.bind(this), false)
  }
  route (path, cb) {
    this.routes[path] = cb
  }
  bindEvent () {
    const that = this
    const links = document.getElementsByTagName('a')
    ;[].forEach.call(links, link => {
      link.addEventListener('click', function () {
        const url = this.getAttribute('data-href')
        // console.log(url)
        that.push(url)
      })
    })
  }
  push (url) {
    window.history.pushState({}, null, url)
    this.updateView()
  }
  updateView () {
    const currentUrl = window.location.pathname || '/'
    // console.log(currentUrl)
    this.routes[currentUrl] && this.routes[currentUrl]()
  }
}