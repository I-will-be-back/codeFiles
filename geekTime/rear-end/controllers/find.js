const topModel = require('../models/top');
const carouselModel = require('../models/carousel');
const recommendModel = require('../models/recommend');
const newsModel = require('../models/news');
const shopModel = require('../models/shop');
const readModel = require('../models/read');
const courseModel = require('../models/course');
const lessonModel = require('../models/lesson');
const topicModel = require('../models/topic');
const videoModel = require('../models/video');
const iconModel = require('../models/icon');

class Controller {
  static async search(ctx) {
    let id = ctx.params.id;
    try {
      let topData = await topModel.getDetail(1);
      let carousel = await carouselModel.getDetail();
      let recommend = await recommendModel.getDetail(id);
      let news = await newsModel.getDetail();
      let shop = await shopModel.getDetail();
      let read = await readModel.getDetail();
      let course = await courseModel.getDetail();
      let lesson = await lessonModel.getDetail();
      let topic = await topicModel.getDetail();
      let video = await videoModel.getDetail();
      let icon = await iconModel.getDetail();
      ctx.response.status = 200;
      ctx.body = { code: 200, msg: '查询成功', topData, carousel, recommend, news, shop, 
        read, course, lesson, topic, video, icon
      }
    } catch (err) {
        ctx.response.status = 412;
        ctx.body = { code: 412, msg: '查询失败', err }
    }
  }
}
module.exports = Controller;