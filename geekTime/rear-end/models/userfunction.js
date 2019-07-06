const db = require('../config/db');

const Sequelize = db.sequelize;

const Schema = Sequelize.import('../schema/userfunction');
// 自动创建表
Schema.sync({force: false});

class Model {
	static async createDetail(data) {
		return await Schema.create({
			icon: data.icon,
			text: data.text,
			more: data.more,
		})
	}

  static async getDetail() {
    return await Schema.findAll()
  }
}

module.exports = Model;