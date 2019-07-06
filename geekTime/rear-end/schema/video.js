module.exports = function (sequelize, DataTypes) {
  return sequelize.define('video', {
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
    // 视频个数
		number: {
			type: DataTypes.INTEGER,
			allowNull: false,
    },
    // 图标
		icon: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		freezeTableName: true
	})
}