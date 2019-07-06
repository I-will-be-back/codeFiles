// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const User = Sequelize.import('../schema/user');
// 自动创建表
// User.sync({force: true});
class UserModel {
    /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createUser(data) {
        return await User.create({
            firstname: data.firstname, // 名
            lastname: data.lastname, // 姓
        })
    }
    /**
     * 查询取文章详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async getUserDetail(id) {
        return await User.findOne({
            where: {
                id,
            },
        })
    }
}
module.exports = UserModel