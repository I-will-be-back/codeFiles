// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Top = Sequelize.import('../schema/top');
// 自动创建表
// Top.sync({force: false});
class TopModel {
    static async createUser(data) {
        return await Top.create({
            title: data.title, // 标题
            image1: data.image1, // 图片1
            image2: data.image2, // 图片2
        })
    }

    static async getUserDetail(id) {
        return await Top.findOne({
            where: {
                id,
            },
        })
    }
}

module.exports = TopModel