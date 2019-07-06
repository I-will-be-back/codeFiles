const db = require('../config/db');

const Sequelize = db.sequelize;

const Schema = Sequelize.import('../schema/top');
// 自动创建表
Schema.sync({force: false});

class Model {
	static async createDetail(data) {
		return await Schema.create({
			title: data.title, // 标题
			image1: data.image1, // 图片1
			image2: data.image2, // 图片2
		})
	}

	static async getDetail(id) {
		return await Schema.findOne({
			where: { id },
		})
	}
}

module.exports = Model;