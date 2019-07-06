const topModel = require('../models/top');
const studyTimeModel = require('../models/studytime');
const recordingModel = require('../models/recording');

class Controller {
  static async search(ctx) {
    let id = ctx.params.id;
    try {
      let topData = await topModel.getDetail(3);
      let studytime = await studyTimeModel.getDetail(id);
      let recording = await recordingModel.getDetail(id);
      ctx.response.status = 200;
      ctx.body = { code: 200, msg: '查询成功', topData, studytime, recording }
    } catch (err) {
        ctx.response.status = 412;
        ctx.body = { code: 412, msg: '查询失败', err }
    }
  }
}
module.exports = Controller;