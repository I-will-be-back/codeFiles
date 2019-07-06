const Model = require('../models/video');

class Controller {
  static async create(ctx) {
    let req = ctx.request.body;
    if (req.title && req.icon && req.number) {
      try {
        await Model.createDetail(req);
        ctx.response.status = 200;
        ctx.body = { code: 200, msg: '创建成功'}
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = { code: 200, msg: '创建失败', err }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = { code: 200, msg: '参数不齐全' }
    }
  }

  static async search(ctx) {
    try {
      let video = await Model.getDetail();
      ctx.response.status = 200;
      ctx.body = { code: 200, msg: '查询成功', video }
    } catch (err) {
        ctx.response.status = 412;
        ctx.body = { code: 412, msg: '查询失败', err }
    }
  }
}
module.exports = Controller;