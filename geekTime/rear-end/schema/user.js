module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		// 头像
		avatar: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 用户名
		name: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 电话
		tel: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		freezeTableName: true
	})
}