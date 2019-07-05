const TopModel = require('../models/top')
class TopController {
    static async create(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (req.image2
        ) {
            try {
                // 创建
                const ret = await TopModel.createUser(req);
                // 返回新创建的信息
                const data = await TopModel.getUserDetail(ret.id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '创建成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '创建失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }
    }
    static async detail(ctx) {
        let id = ctx.params.id;

        if (id) {
            try {
                // 查询模型
                let data = await TopModel.getUserDetail(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询成功',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '查询失败',
                    data
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '用户ID必须传'
            }
        }
    }
}
module.exports = TopController