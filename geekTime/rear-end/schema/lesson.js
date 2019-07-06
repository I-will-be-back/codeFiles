module.exports = function (sequelize, DataTypes) {
  return sequelize.define('lesson', {
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
    // 专家介绍
		text: {
			type: DataTypes.STRING,
			allowNull: false,
    },
    // 视频时间
		duration: {
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