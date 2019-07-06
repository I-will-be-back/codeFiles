module.exports = function (sequelize, DataTypes) {
  return sequelize.define('nav', {
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
	}, {
		freezeTableName: true
	})
}