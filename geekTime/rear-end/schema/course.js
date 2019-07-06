module.exports = function (sequelize, DataTypes) {
  return sequelize.define('course', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		// 小标题
		text: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 标题
		title: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 内容概要
		content: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 人物图片
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		freezeTableName: true
	})
}