const Model = require('../models/recommend');

class Controller {
	static async create(ctx) {
		const req = ctx.request.body;
		if (req.content && req.image) {
			try {
				await Model.createDetail(req);
				ctx.response.status = 200;
				ctx.body = { code: 200, msg: '创建成功' }
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
		const id = ctx.params.id;
		if (id) {
			try {
				const recommend = await Model.getDetail(id);
				ctx.response.status = 200;
				ctx.body = { code: 200, msg: '查询成功', recommend }
			} catch (err) {
				ctx.response.status = 412;
				ctx.body = { code: 412, msg: '查询失败', err }
			}
		} else {
			ctx.response.status = 416;
			ctx.body = { code: 416, msg: '未传入id' }
		}
	}
}

module.exports = Controller;