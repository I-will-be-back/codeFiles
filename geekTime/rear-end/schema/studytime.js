module.exports = function (sequelize, DataTypes) {
  return sequelize.define('studytime', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		// 天数
		day: {
			type: DataTypes.INTEGER,
			allowNull: true,
    },
    // 小时
		hour: {
			type: DataTypes.INTEGER,
			allowNull: true,
    },
    // 分钟
		minute: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}, {
		freezeTableName: true
	})
}