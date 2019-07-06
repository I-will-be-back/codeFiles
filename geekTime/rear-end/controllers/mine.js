const topModel = require('../models/top');
const userModel = require('../models/user');
const userfunctionModel = require('../models/userfunction');

class Controller {
  static async search(ctx) {
    let id = ctx.params.id;
    try {
      let topData = await topModel.getDetail(4);
      let user = await userModel.getDetail(id);
      let userfunction = await userfunctionModel.getDetail();
      ctx.response.status = 200;
      ctx.body = { code: 200, msg: '查询成功', topData, user, userfunction }
    } catch (err) {
        ctx.response.status = 412;
        ctx.body = { code: 412, msg: '查询失败', err }
    }
  }
}
module.exports = Controller;