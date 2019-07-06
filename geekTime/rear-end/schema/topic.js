module.exports = function (sequelize, DataTypes) {
  return sequelize.define('topic', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
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