module.exports = function (sequelize, DataTypes) {
  return sequelize.define('top', {
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
		// 图片1
		image1: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		// 图片2
		image2: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		freezeTableName: true
	})
}