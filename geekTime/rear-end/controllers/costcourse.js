const Model = require('../models/costcourse');

class Controller {
  static async create(ctx) {
    let req = ctx.request.body;
    if (req.title && req.image && req.who && req.intc && req.number1 &&
      req.number2 && req.newprice && req.type && req.way) {
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
      let costcourse = await Model.getDetail();
      ctx.response.status = 200;
      ctx.body = { code: 200, msg: '查询成功', costcourse }
    } catch (err) {
        ctx.response.status = 412;
        ctx.body = { code: 412, msg: '查询失败', err }
    }
  }
}
module.exports = Controller;