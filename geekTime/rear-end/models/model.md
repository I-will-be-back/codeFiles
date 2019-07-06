const db = require('../config/db');

const Sequelize = db.sequelize;

const Schema = Sequelize.import('../schema/xxx');
// 自动创建表
Schema.sync({force: false});

class Model {
	static async createDetail(data) {
		return await Schema.create({
			title: data.title,
		})
	}

  static async getDetail() {
    return await Schema.findAll()
  }

	static async getDetail(id) {
		return await Schema.findOne({
			where: { id },
		})
	}
}

module.exports = Model;