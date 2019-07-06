module.exports = function (sequelize, DataTypes) {
  return sequelize.define('recommend', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		// 内容
		content: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		freezeTableName: true
	})
}