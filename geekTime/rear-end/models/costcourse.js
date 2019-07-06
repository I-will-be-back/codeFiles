const db = require('../config/db');

const Sequelize = db.sequelize;

const Schema = Sequelize.import('../schema/costcourse');
// 自动创建表
Schema.sync({force: false});

class Model {
	static async createDetail(data) {
		return await Schema.create({
			title: data.title,
			image: data.image,
			who: data.who,
			intc: data.intc,
			number1: data.number1,
			number2: data.number2,
			label: data.label,
			newprice: data.newprice,
			oldprice: data.oldprice,
			type: data.type,
			way: data.way,
		})
	}

  static async getDetail() {
    return await Schema.findAll()
  }
}

module.exports = Model;