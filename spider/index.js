const https = require('https');
const fs = require('fs');
const path = require('path');
// 服务端的 $ jquery
const cherrio = require('cheerio');
const url = 'https://movie.douban.com/top250';
const imageDir = './images/';
const dataDir = './moviesData/';

// 爬取每一页的方法
function spiderMovies(start) {
  https.get(url + `?start=${start}`, (res) => {
    res.setEncoding('utf-8');
    // 源源不断收到数据
    let html = '';
    res.on('data', (chunk) => {
      html += chunk;
    });
    // 数据发完了
    res.on('end', () => {
      // 可以用的html
      const $ = cherrio.load(html);
      let movies = [];
      $('.item').each(function() {
        // this 在哪个作用域之内查找 - 每一部电影
        // 不加this 默认全局 每次都找到第一张
        const picURL = $('.pic a img', this).attr('src');
        const title = $('.title', this).text();
        const star = $('.info .star .rating_num', this).text();
        const link = $('a', this).attr('href');
        const movie = {
          title,star,link,picURL
        }
        movies.push(movie);
        downloadImg(picURL);
      });
      // 文件名上标示一下 数据页数
      saveLocalData(start / 25, movies);
    });
  });
}

function saveLocalData(page, movies) {
  fs.writeFile(dataDir + `data${page}.json`,
  JSON.stringify(movies),
  (err) => {
    if (!err) {
      console.log('movies save successed!');
    } else {
      console.log(err);
    }
  });
}

function downloadImg(picURL) {
  https.get(picURL, (res) => {
    res.setEncoding('binary');
    let imageData = '';
    res.on('data', (chunk) => {
      imageData += chunk;
    });
    res.on('end', () => {
      fs.writeFile(imageDir + path.basename(picURL),
      imageData,
      'binary',
      (err) => {
        if (!err) {
          console.log('image dowmloaded');
          path.basename(picURL);
        } else {
          console.log(err);
        }
      });
    });
  });
}

// es6 generate函数
function* doSpider(x) {
  let start = 0;
  while (start < x) {
    yield start;
    spiderMovies(start);
    start += 25;
  }
}

for (let x of doSpider(250)) {
  console.log('爬取', x);
}