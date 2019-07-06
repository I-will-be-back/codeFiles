module.exports = function (sequelize, DataTypes) {
  return sequelize.define('costcourse', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		// 标题
		title: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 图片
		image: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 谁
		who: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 人物简介
		intc: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 多少讲
		number1: {
			type: DataTypes.INTEGER,
			allowNull: false,
    },
    // 人数
		number2: {
			type: DataTypes.INTEGER,
			allowNull: false,
    },
    // 现在的价格
		newprice: {
			type: DataTypes.INTEGER,
			allowNull: false,
    },
    // 原来的价格
		oldprice: {
			type: DataTypes.INTEGER,
			allowNull: true,
    },
    // 价格标志
		label: {
			type: DataTypes.STRING,
			allowNull: true,
    },
     // 归属于那一类
		type: {
			type: DataTypes.INTEGER,
			allowNull: false,
    },
    // 方式
		way: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		freezeTableName: true
	})
}