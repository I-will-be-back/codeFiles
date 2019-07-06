module.exports = function (sequelize, DataTypes) {
  return sequelize.define('carousel', {
    id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		// 轮播图
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
  }, {
    freezeTableName: true
  })
}