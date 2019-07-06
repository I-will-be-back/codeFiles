module.exports = function (sequelize, DataTypes) {
  return sequelize.define('userfunction', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		// 图标
		icon: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// 用户功能
		text: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// 额外信息
		more: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		freezeTableName: true
	})
}