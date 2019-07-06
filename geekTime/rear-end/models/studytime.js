const db = require('../config/db');

const Sequelize = db.sequelize;

const Schema = Sequelize.import('../schema/studytime');
// 自动创建表
Schema.sync({force: false});

class Model {
	static async createDetail(data) {
		return await Schema.create({
			day: data.day,
			hour: data.hour,
			minute: data.minute,
		})
	}

  static async getDetail(id) {
		return await Schema.findOne({
			where: { id },
		})
	}
}

module.exports = Model;