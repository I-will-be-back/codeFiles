const db = require('../config/db');

const Sequelize = db.sequelize;

const Schema = Sequelize.import('../schema/recommend');
// 自动创建表
Schema.sync({force: false});

class Model {
	static async createDetail(data) {
		return await Schema.create({
			content: data.content,
			image: data.image,
		})
	}

	static async getDetail(id) {
		return await Schema.findOne({
			where: { id },
		})
	}
}

module.exports = Model;