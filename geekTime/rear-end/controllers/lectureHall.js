const topModel = require('../models/top');
const navModel = require('../models/nav');
const costCourseModel = require('../models/costcourse');
const lessonModel = require('../models/lesson');

class Controller {
  static async search(ctx) {
    // let id = ctx.params.id;
    try {
      let topData = await topModel.getDetail(2);
      let nav = await navModel.getDetail();
      let costCourse = await costCourseModel.getDetail();
      let lesson = await lessonModel.getDetail();
      ctx.response.status = 200;
      ctx.body = { code: 200, msg: '查询成功', topData, nav, costCourse, lesson }
    } catch (err) {
        ctx.response.status = 412;
        ctx.body = { code: 412, msg: '查询失败', err }
    }
  }
}
module.exports = Controller;