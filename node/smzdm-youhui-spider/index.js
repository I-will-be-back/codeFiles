const request = require('request');
const cheerio = require('cheerio');

request('https://www.smzdm.com/youhui/', (err, res) => {
  if (!err) {
    // console.log(res.body);
    const $ = cheerio.load(res.body, {
      // decodeEntities 要不要解析 html entity
      decodeEntities: false
    });
    $('.list.list_preferential').each(function() {
      // this用于限制查找区域
      let title = $('.itemName a', this).html();
      // <span>***</span>
      title = title.replace(/<.*>.*<\/.*>/g,'');
      const price = $('.listTitle .red', this).text();
      const img = $('.picLeft img', this).attr('src');
      const desc = $('.lrInfo', this).text().trim();

      console.log({
        title, price, img, desc
      });
    });
  }
});