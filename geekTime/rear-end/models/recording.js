const db = require('../config/db');

const Sequelize = db.sequelize;

const Schema = Sequelize.import('../schema/recording');
// 自动创建表
Schema.sync({force: false});

class Model {
	static async createDetail(data) {
		return await Schema.create({
			number1: data.number1,
			number2: data.number2,
			number3: data.number3,
			number4: data.number4,
		})
	}

  static async getDetail() {
    return await Schema.findAll()
  }
}

module.exports = Model;