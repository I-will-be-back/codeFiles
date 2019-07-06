const db = require('../config/db');

const Sequelize = db.sequelize;

const Schema = Sequelize.import('../schema/topic');
// 自动创建表
Schema.sync({force: false});

class Model {
	static async createDetail(data) {
		return await Schema.create({
			image: data.image,
		})
	}

  static async getDetail() {
    return await Schema.findAll()
  }
}

module.exports = Model;