module.exports = function (sequelize, DataTypes) {
  return sequelize.define('recording', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		// 笔记数
		number1: {
			type: DataTypes.INTEGER,
			allowNull: false,
    },
    // 留言数
		number2: {
			type: DataTypes.INTEGER,
			allowNull: false,
    },
    // 收藏数
		number3: {
			type: DataTypes.INTEGER,
			allowNull: false,
    },
    // 下载数
		number4: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}, {
		freezeTableName: true
	})
}